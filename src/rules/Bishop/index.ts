import { Piece } from "../../entities/piece"
import { PiecePosition } from "../../entities/piecePosition"
import { Team } from "../../entities/team"
import { Rule } from "../Rule"

class BishopRule extends Rule {

  static isValidMove(
    initialPosition: PiecePosition,
    finalPosition: PiecePosition,
    team: Team,
    boardState: Piece[]
  ): Boolean {

    for (let i = 1; i < 8; i++) {

      if (finalPosition.x > initialPosition.x && finalPosition.y > initialPosition.y) {
        const passedPosition = { x: initialPosition.x + i, y: initialPosition.y + i }
        if (passedPosition.x === finalPosition.x && passedPosition.y === finalPosition.y) {
          if (!this.tileIsOccupiedByFriend(passedPosition, boardState, team)) {
            return true
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            break
          }
        }
      }

      if (finalPosition.x > initialPosition.x && finalPosition.y < initialPosition.y) {
        const passedPosition = { x: initialPosition.x + i, y: initialPosition.y - i }
        if (passedPosition.x === finalPosition.x && passedPosition.y === finalPosition.y) {
          if (!this.tileIsOccupiedByFriend(passedPosition, boardState, team)) {
            return true
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            break
          }
        }
      }

      if (finalPosition.x < initialPosition.x && finalPosition.y < initialPosition.y) {
        const passedPosition = { x: initialPosition.x - i, y: initialPosition.y - i }
        if (passedPosition.x === finalPosition.x && passedPosition.y === finalPosition.y) {
          if (!this.tileIsOccupiedByFriend(passedPosition, boardState, team)) {
            return true
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            break
          }
        }
      }

      if (finalPosition.x < initialPosition.x && finalPosition.y > initialPosition.y) {
        const passedPosition = { x: initialPosition.x - i, y: initialPosition.y + i }
        if (passedPosition.x === finalPosition.x && passedPosition.y === finalPosition.y) {
          if (!this.tileIsOccupiedByFriend(passedPosition, boardState, team)) {
            return true
          }
        } else {
          if (this.tileIsOccupied(passedPosition, boardState)) {
            break
          }
        }
      }


    }

    return false
  }

}

export { BishopRule }
