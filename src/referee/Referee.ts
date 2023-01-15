import { PieceType } from "../entities/pieceType"
import { Team } from "../entities/team"

class Referee {
  isValidMove(px: number, py: number, x: number, y: number, type: PieceType, team: Team){
    if(type === PieceType.PAWN){
      if(team === Team.WHITE){
        if(px === x && (y - py === 1 || (y - py === 2 && py === 1))){
          return true
        }
      }else{
        if(px === x && (y - py === -1 || (y - py === -2 && py === 7))){
          return true
        }
      }
    }

    return false
  }
}

export { Referee }
