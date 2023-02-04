import { Piece } from "../../entities/piece"
import { PiecePosition } from "../../entities/piecePosition"
import { Team } from "../../entities/team"
import { comparePositions } from "../../helpers/comparePositions"
import { Rule } from "../Rule"

class RookRule extends Rule {

  static isValidMove(
    initialPosition: PiecePosition,
    finalPosition: PiecePosition,
    team: Team,
    boardState: Piece[]
  ): boolean {

    if(initialPosition.y === finalPosition.y || initialPosition.x === finalPosition.x){
      for(let i = 1; i < 8; i++){
        const direction = initialPosition.x === finalPosition.x ? 'y' : 'x'
        const multiplier = finalPosition[direction] > initialPosition[direction] ? 1 : -1

        const passedPosition = { ...initialPosition, [direction]: initialPosition[direction] + (i * multiplier) }
        if(comparePositions(passedPosition, finalPosition)){
          return !this.tileIsOccupiedByFriend(passedPosition, boardState, team)
        }

        if (this.tileIsOccupied(passedPosition, boardState)) break
      }
    }

    return false
  }

}

export { RookRule }
