import { Piece } from "../../entities/piece"
import { PiecePosition } from "../../entities/piecePosition"
import { PieceType } from "../../entities/pieceType"
import { Team } from "../../entities/team"
import { KnightRule } from "../Knight"
import { PawnRule } from "../Pawn"
import { BishopRule } from "../Bishop"

class RuleProxy {
  static isValidMove(
    initialPosition: PiecePosition,
    finalPosition: PiecePosition,
    type: PieceType,
    team: Team,
    boardState: Piece[]
  ): Boolean {

    if (type === PieceType.PAWN) {
      return PawnRule.isValidMove(initialPosition, finalPosition, team, boardState)
    } else if (type === PieceType.KNIGHT) {
      return KnightRule.isValidMove(initialPosition, finalPosition, team, boardState)
    } else if (type === PieceType.BISHOP) {
      return BishopRule.isValidMove(initialPosition, finalPosition, team, boardState)
    }

    return false
  }
}

export { RuleProxy }
