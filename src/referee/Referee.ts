import { Piece } from "../entities/piece"
import { PieceType } from "../entities/pieceType"
import { Team } from "../entities/team"

class Referee {
  tileIsOccupied(x: number, y: number, boardState: Piece[]): Boolean{
    return boardState.find((piece) => piece.x === x && piece.y === y) !== undefined
  }

  tileIsOccupiedByEnemy(x: number, y: number, boardState: Piece[], team: Team): Boolean{
    return boardState.find((piece) => piece.x === x && piece.y === y && piece.team !== team) !== undefined
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

      if(px === x && (y - py === direction || (y - py === direction * 2 && py === startRow))){ // move forward(1 or 2)
        if(y - py === direction * 2){
          return !this.tileIsOccupied(x, y, boardState) && !this.tileIsOccupied(x, y - direction, boardState)
        }
        return !this.tileIsOccupied(x, y, boardState)
      } else if([1, -1].includes(x - px) && y - py === direction){ // move diagonally to attack
        return this.tileIsOccupiedByEnemy(x, y, boardState, team)
      }
    }

    return false
  }
}

export { Referee }
