import { Piece } from "../../entities/piece"
import { PiecePosition } from "../../entities/piecePosition"
import { Team } from "../../entities/team"
import { comparePositions } from "../../helpers/comparePositions"
import { Rule } from "../Rule"

class QueenRule extends Rule {

  static isValidMove(
    initialPosition: PiecePosition,
    finalPosition: PiecePosition,
    team: Team,
    boardState: Piece[]
  ): Boolean {

    for (let i = 1; i < 8; i++) {
      let passedPosition
      if (initialPosition.y === finalPosition.y || initialPosition.x === finalPosition.x) {
        const direction = initialPosition.x === finalPosition.x ? 'y' : 'x'
        const multiplier = finalPosition[direction] > initialPosition[direction] ? 1 : -1

        passedPosition = { ...initialPosition, [direction]: initialPosition[direction] + (i * multiplier) }
      } else {
        const xDirection = finalPosition.x > initialPosition.x ? 1 : -1
        const yDirection = finalPosition.y > initialPosition.y ? 1 : -1

        passedPosition = { x: initialPosition.x + (i * xDirection), y: initialPosition.y + (i * yDirection) }
      }

      if (comparePositions(passedPosition, finalPosition)) {
        return !this.tileIsOccupiedByFriend(passedPosition, boardState, team)
      }

      if (this.tileIsOccupied(passedPosition, boardState)) break
    }

    return false
  }

}

export { QueenRule }
