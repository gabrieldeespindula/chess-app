import { KnightRule } from "."
import { INITIAL_BOARD_STATE } from "../../constants/initialBoardState"
import { PiecePosition } from "../../entities/piecePosition"
import { PieceType } from "../../entities/pieceType"
import { Team } from "../../entities/team"

describe('KnightRule', () => {
  describe('isValidMove', () => {
    function call(position: PiecePosition, initialBoardState = INITIAL_BOARD_STATE, initialPosition: PiecePosition = { x: 5, y: 5 }) {
      return KnightRule.isValidMove(initialPosition, position, Team.WHITE, initialBoardState)
    }

    describe('when tile is occupied by a friend', () => {
      it('returns false', () => {
        const initialBoardState = [
          { image: '', type: PieceType.KNIGHT, position: { x: 7, y: 6 }, team: Team.WHITE },
        ]
        expect(call({ x: 7, y: 6 }, initialBoardState)).toBe(false)
      })
    })

    describe('when tile is not occupied by a friend', () => {
      describe('when the piece moves two square forward and one square left', () => {
        it('returns true', () => {
          expect(call({ x: 4, y: 7 })).toBe(true)
        })
      })

      describe('when the piece moves two square forward and one square right', () => {
        it('returns true', () => {
          expect(call({ x: 6, y: 7 })).toBe(true)
        })
      })

      describe('when the piece moves two square backward and one square left', () => {
        it('returns true', () => {
          expect(call({ x: 4, y: 3 })).toBe(true)
        })
      })

      describe('when the piece moves two square backward and one square right', () => {
        it('returns true', () => {
          expect(call({ x: 6, y: 3 })).toBe(true)
        })
      })

      describe('when the piece moves two square left and one square forward', () => {
        it('returns true', () => {
          expect(call({ x: 3, y: 6 })).toBe(true)
        })
      })

      describe('when the piece moves two square left and one square backward', () => {
        it('returns true', () => {
          expect(call({ x: 3, y: 4 })).toBe(true)
        })
      })

      describe('when the piece moves two square right and one square forward', () => {
        it('returns true', () => {
          expect(call({ x: 7, y: 6 })).toBe(true)
        })
      })

      describe('when the piece moves two square right and one square backward', () => {
        it('returns true', () => {
          expect(call({ x: 7, y: 4 })).toBe(true)
        })
      })
    })
  })
})
