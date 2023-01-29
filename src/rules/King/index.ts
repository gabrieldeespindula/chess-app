import { Piece } from "../../entities/piece"
import { PiecePosition } from "../../entities/piecePosition"
import { Team } from "../../entities/team"
import { Rule } from "../Rule"

class KingRule extends Rule {

  static isValidMove(
    initialPosition: PiecePosition,
    finalPosition: PiecePosition,
    team: Team,
    boardState: Piece[]
  ): Boolean {

    const validX = Math.abs(finalPosition.x - initialPosition.x) <= 1
    const validY = Math.abs(finalPosition.y - initialPosition.y) <= 1

    if (validX && validY) return !this.tileIsOccupiedByFriend(finalPosition, boardState, team)

    return false
  }

}

export { KingRule }
