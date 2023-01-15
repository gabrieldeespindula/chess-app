import { Piece } from "../entities/piece"
import { PiecePosition } from "../entities/piecePosition"
import { PieceType } from "../entities/pieceType"
import { Team } from "../entities/team"
import { comparePositions } from "../helpers/comparePositions"

class Referee {
  tileIsOccupied(position: PiecePosition, boardState: Piece[]): Boolean {
    return boardState.find((piece) => comparePositions(piece.position, position)) !== undefined
  }

  tileIsOccupiedByEnemy(position: PiecePosition, boardState: Piece[], team: Team): Boolean {
    return boardState.find((piece) => comparePositions(piece.position, position)) !== undefined
  }

  isValidMove(
    initialPosition: PiecePosition,
    finalPosition: PiecePosition,
    type: PieceType,
    team: Team,
    boardState: Piece[]
  ): Boolean {

    if (type === PieceType.PAWN) {
      const startRow = team === Team.WHITE ? 1 : 6
      const direction = team === Team.WHITE ? 1 : -1

      if (initialPosition.x === finalPosition.x && (finalPosition.y - initialPosition.y === direction || (finalPosition.y - initialPosition.y === direction * 2 && initialPosition.y === startRow))) {
        if (finalPosition.y - initialPosition.y === direction * 2) {
          return !this.tileIsOccupied(finalPosition, boardState) && !this.tileIsOccupied({ x: finalPosition.x, y: finalPosition.y - direction }, boardState)
        }
        return !this.tileIsOccupied(finalPosition, boardState)
      } else if ([1, -1].includes(finalPosition.x - initialPosition.x) && finalPosition.y - initialPosition.y === direction) {
        return this.tileIsOccupiedByEnemy(finalPosition, boardState, team)
      }
    }

    return false
  }
}

export { Referee }
