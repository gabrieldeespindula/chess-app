import { Piece } from "../entities/piece"
import { PieceType } from "../entities/pieceType"
import { Team } from "../entities/team"

class Referee {
  tileIsOccupied(x: number, y: number, boardState: Piece[]): Boolean{
    const piece = boardState.find((piece) => piece.x === x && piece.y === y)

    return piece !== undefined
  }

  isValidMove(
    px: number,
    py: number,
    x: number,
    y: number,
    type: PieceType,
    team: Team,
    boardState: Piece[]
  ): Boolean{

    if(type === PieceType.PAWN){
      const startRow = team === Team.WHITE ? 1 : 6
      const direction = team === Team.WHITE ? 1 : -1

      if(px === x && (y - py === direction || (y - py === direction * 2 && py === startRow))){
        if(y - py === direction * 2){
          return !this.tileIsOccupied(x, y, boardState) && !this.tileIsOccupied(x, y - direction, boardState)
        }
        return !this.tileIsOccupied(x, y, boardState)
      }
    }

    return false
  }
}

export { Referee }
