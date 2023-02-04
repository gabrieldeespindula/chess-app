import { Piece } from "../../entities/piece"
import { PiecePosition } from "../../entities/piecePosition"
import { Team } from "../../entities/team"
import { comparePositions } from "../../helpers/comparePositions"
import { Rule } from "../Rule"

class BishopRule extends Rule {

  static isValidMove(
    initialPosition: PiecePosition,
    finalPosition: PiecePosition,
    team: Team,
    boardState: Piece[]
  ): boolean {

    for (let i = 1; i < 8; i++) {
      const xDirection = finalPosition.x > initialPosition.x ? 1 : -1
      const yDirection = finalPosition.y > initialPosition.y ? 1 : -1

      const passedPosition = { x: initialPosition.x + (i * xDirection), y: initialPosition.y + (i * yDirection) }

      if (comparePositions(passedPosition, finalPosition)) {
        return !this.tileIsOccupiedByFriend(passedPosition, boardState, team)
      }

      if (this.tileIsOccupied(passedPosition, boardState)) break
    }

    return false
  }

}

export { BishopRule }
