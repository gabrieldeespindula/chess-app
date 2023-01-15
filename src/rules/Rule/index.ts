import { Piece } from "../../entities/piece"
import { PiecePosition } from "../../entities/piecePosition"
import { Team } from "../../entities/team"
import { comparePositions } from "../../helpers/comparePositions"

class Rule {
  static tileIsOccupied(position: PiecePosition, boardState: Piece[]): Boolean {
    return boardState.find((piece) => comparePositions(piece.position, position)) !== undefined
  }

  static tileIsOccupiedByEnemy(position: PiecePosition, boardState: Piece[], team: Team): Boolean {
    return boardState.find((piece) => comparePositions(piece.position, position) && piece.team !== team) !== undefined
  }
}

export { Rule }
