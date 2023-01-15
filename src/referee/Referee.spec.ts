import { PieceType } from "../entities/pieceType"
import { Team } from "../entities/team"
import { Referee } from "./Referee"

describe('Referee', () => {
  const referee = new Referee()

  describe('isValidMove', () => {
    describe('when the piece is a pawn', () => {
      describe('when the piece is white', () => {
        describe('when piece is in the start position', () => {
          function call(x: number, y: number){
            return referee.isValidMove(0, 1, x, y, PieceType.PAWN, Team.WHITE)
          }
          describe('when the pawn moves one square forward', () => {
            it('returns true', () => {
              expect(call(0, 2)).toBe(true)
            })
          })
          describe('when the pawn moves two square forward', () => {
            it('returns true', () => {
              expect(call(0, 3)).toBe(true)
            })
          })
          describe('When piece makes a not allowed move', () => {
            it('returns false', () => {
              expect(call(0, 4)).toBe(false)
              expect(call(1, 2)).toBe(false)
            })
          })
        })
        describe('when piece is not in the start position', () => {
          function call(x: number, y: number){
            return referee.isValidMove(0, 2, x, y, PieceType.PAWN, Team.WHITE)
          }
          describe('when the pawn moves one square forward', () => {
            it('returns true', () => {
              expect(call(0, 3)).toBe(true)
            })
          })
          describe('when the pawn moves two square forward', () => {
            it('returns false', () => {
              expect(call(0, 4)).toBe(false)
            })
          })
          describe('When piece makes a not allowed move', () => {
            it('returns false', () => {
              expect(call(0, 4)).toBe(false)
              expect(call(1, 3)).toBe(false)
            })
          })
        })
      })
      describe('when the piece is black', () => {
        describe('when piece is in the start position', () => {
          function call(x: number, y: number){
            return referee.isValidMove(0, 7, x, y, PieceType.PAWN, Team.BLACK)
          }
          describe('when the pawn moves one square forward', () => {
            it('returns true', () => {
              expect(call(0, 6)).toBe(true)
            })
          })
          describe('when the pawn moves two square forward', () => {
            it('returns true', () => {
              expect(call(0, 5)).toBe(true)
            })
          })
          describe('When piece makes a not allowed move', () => {
            it('returns false', () => {
              expect(call(0, 4)).toBe(false)
              expect(call(1, 5)).toBe(false)
            })
          })
        })
        describe('when piece is not in the start position', () => {
          function call(x: number, y: number){
            return referee.isValidMove(0, 6, x, y, PieceType.PAWN, Team.BLACK)
          }
          describe('when the pawn moves one square forward', () => {
            it('returns true', () => {
              expect(call(0, 5)).toBe(true)
            })
          })
          describe('when the pawn moves two square forward', () => {
            it('returns false', () => {
              expect(call(0, 4)).toBe(false)
            })
          })
          describe('When piece makes a not allowed move', () => {
            it('returns false', () => {
              expect(call(0, 3)).toBe(false)
              expect(call(1, 5)).toBe(false)
            })
          })
        })
      })
    })
  })
})
