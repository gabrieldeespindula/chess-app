import { Piece } from "../../entities/piece"
import { PiecePosition } from "../../entities/piecePosition"
import { Team } from "../../entities/team"
import { Rule } from "../Rule"

class KnightRule extends Rule {

  static isValidMove(
    initialPosition: PiecePosition,
    finalPosition: PiecePosition,
    team: Team,
    boardState: Piece[]
  ): boolean {

    for (let i = -1; i < 2; i = i + 2) {
      if (finalPosition.y === initialPosition.y + 2 * i) {
        if (finalPosition.x === initialPosition.x + 1 || finalPosition.x === initialPosition.x - 1) {
          return !this.tileIsOccupiedByFriend(finalPosition, boardState, team)
        }
      }
      if (finalPosition.x === initialPosition.x + 2 * i) {
        if (finalPosition.y === initialPosition.y + 1 || finalPosition.y === initialPosition.y - 1) {
          return !this.tileIsOccupiedByFriend(finalPosition, boardState, team)
        }
      }
    }

    return false
  }

}

export { KnightRule }
