import { PieceType } from "./pieceType"
import { Team } from "./team"

export type Piece = {
  image: string
  x: number
  y: number
  type: PieceType
  team: Team
}
