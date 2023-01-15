import { INITIAL_BOARD_STATE } from "../constants/initialBoardState"
import { PiecePosition } from "../entities/piecePosition"
import { PieceType } from "../entities/pieceType"
import { Team } from "../entities/team"
import { Referee } from "./Referee"

describe('Referee', () => {
  const referee = new Referee()

  describe('isValidMove', () => {
    describe('when the piece is a pawn', () => {
      function callWhite(position: PiecePosition, initialBoardState = INITIAL_BOARD_STATE, py = 1) {
        return referee.isValidMove({ x: 0, y: py }, position, PieceType.PAWN, Team.WHITE, initialBoardState)
      }

      function callBlack(position: PiecePosition, initialBoardState = INITIAL_BOARD_STATE, py = 6) {
        return referee.isValidMove({ x: 0, y: py }, position, PieceType.PAWN, Team.BLACK, initialBoardState)
      }

      describe('when the pawn moves one square forward', () => {
        describe('when there is no piece one square forward', () => {
          it('returns true', () => {
            expect(callWhite({ x: 0, y: 2 })).toBe(true)
            expect(callBlack({ x: 0, y: 5 })).toBe(true)
          })
        })
        describe('when there is a piece one square forward', () => {
          it('returns false', () => {
            const boardStateWhite = [...INITIAL_BOARD_STATE, { image: '', position: { x: 0, y: 2 }, type: PieceType.PAWN, team: Team.BLACK }]
            expect(callWhite({ x: 0, y: 2 }, boardStateWhite)).toBe(false)
            const boardStateBlack = [...INITIAL_BOARD_STATE, { image: '', position: { x: 0, y: 5 }, type: PieceType.PAWN, team: Team.WHITE }]
            expect(callBlack({ x: 0, y: 5 }, boardStateBlack)).toBe(false)
          })
        })
      })

      describe('when the pawn moves two square forward', () => {
        describe('when piece is in the start position', () => {
          describe('when there is no piece two square ahead', () => {
            it('returns true', () => {
              expect(callWhite({ x: 0, y: 3 })).toBe(true)
              expect(callBlack({ x: 0, y: 4 })).toBe(true)
            })
          })
          describe('when there is a piece two square ahead', () => {
            it('returns false', () => {
              const boardStateWhite = [...INITIAL_BOARD_STATE, { image: '', position: { x: 0, y: 3 }, type: PieceType.PAWN, team: Team.BLACK }]
              expect(callWhite({ x: 0, y: 3 }, boardStateWhite)).toBe(false)
              const boardStateBlack = [...INITIAL_BOARD_STATE, { image: '', position: { x: 0, y: 4 }, type: PieceType.PAWN, team: Team.WHITE }]
              expect(callBlack({ x: 0, y: 4 }, boardStateBlack)).toBe(false)
            })
          })
        })
        describe('when piece is not in the start position', () => {
          it('returns false', () => {
            expect(callWhite({ x: 0, y: 4 }, INITIAL_BOARD_STATE, 2)).toBe(false)
            expect(callBlack({ x: 0, y: 3 }, INITIAL_BOARD_STATE, 5)).toBe(false)
          })
        })
      })

      describe('when the pawn moves one square diagonally', () => {
        describe('when there is a piece one square diagonally', () => {
          it('returns true', () => {
            const boardStateWhite = [...INITIAL_BOARD_STATE, { image: '', position: { x: 1, y: 2 }, type: PieceType.PAWN, team: Team.BLACK }]
            expect(callWhite({ x: 1, y: 2 }, boardStateWhite)).toBe(true)
            const boardStateBlack = [...INITIAL_BOARD_STATE, { image: '', position: { x: 1, y: 5 }, type: PieceType.PAWN, team: Team.WHITE }]
            expect(callBlack({ x: 1, y: 5 }, boardStateBlack)).toBe(true)
          })
        })
        describe('when there is no piece one square diagonally', () => {
          it('returns false', () => {
            expect(callWhite({ x: 1, y: 2 })).toBe(false)
            expect(callBlack({ x: 1, y: 5 })).toBe(false)
          })
        })
      })

      describe('When piece makes a not allowed move', () => {
        it('returns false', () => {
          expect(callWhite({ x: 1, y: 2 })).toBe(false)
          expect(callBlack({ x: 1, y: 5 })).toBe(false)
        })
      })
    })
  })
})
