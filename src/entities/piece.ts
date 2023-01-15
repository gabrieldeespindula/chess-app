import { PiecePosition } from "./piecePosition"
import { PieceType } from "./pieceType"
import { Team } from "./team"

export type Piece = {
  image: string
  position: PiecePosition
  type: PieceType
  team: Team
}
