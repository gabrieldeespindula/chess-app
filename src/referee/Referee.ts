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
      if(team === Team.WHITE){
        if(px === x && (y - py === 1 || (y - py === 2 && py === 1))){
          return !this.tileIsOccupied(x, y, boardState)
        }
      }else{
        if(px === x && (y - py === -1 || (y - py === -2 && py === 6))){
          return !this.tileIsOccupied(x, y, boardState)
        }
      }
    }

    return false
  }
}

export { Referee }
