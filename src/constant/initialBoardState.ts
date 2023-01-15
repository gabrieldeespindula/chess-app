import { Piece } from "../entities/piece"
import { PieceType } from "../entities/pieceType"
import { Team } from "../entities/team"

const INITIAL_BOARD_STATE: Piece[] = []

for (let i = 0; i <= 1; i++) {
  const y = i === 1 ? 7 : 0
  const color = i === 1 ? 'b' : 'w'
  const team = i === 1 ? Team.BLACK : Team.WHITE

  for (let pawn_i = 0; pawn_i < 8; pawn_i++) {
    const y = i === 1 ? 6 : 1
    INITIAL_BOARD_STATE.push({ image: `assets/images/pawn_${color}.png`, x: pawn_i, y, type: PieceType.PAWN, team })
  }

  INITIAL_BOARD_STATE.push({ image: `assets/images/rook_${color}.png`, x: 0, y, type: PieceType.ROOK, team })
  INITIAL_BOARD_STATE.push({ image: `assets/images/rook_${color}.png`, x: 7, y, type: PieceType.ROOK, team })
  INITIAL_BOARD_STATE.push({ image: `assets/images/knight_${color}.png`, x: 1, y, type: PieceType.KNIGHT, team })
  INITIAL_BOARD_STATE.push({ image: `assets/images/knight_${color}.png`, x: 6, y, type: PieceType.KNIGHT, team })
  INITIAL_BOARD_STATE.push({ image: `assets/images/bishop_${color}.png`, x: 2, y, type: PieceType.BISHOP, team })
  INITIAL_BOARD_STATE.push({ image: `assets/images/bishop_${color}.png`, x: 5, y, type: PieceType.BISHOP, team })
  INITIAL_BOARD_STATE.push({ image: `assets/images/queen_${color}.png`, x: 3, y, type: PieceType.QUEEN, team })
  INITIAL_BOARD_STATE.push({ image: `assets/images/king_${color}.png`, x: 4, y, type: PieceType.KING, team })
}

export { INITIAL_BOARD_STATE }
