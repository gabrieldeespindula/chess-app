import { BishopRule } from "."
import { INITIAL_BOARD_STATE } from "../../constants/initialBoardState"
import { PiecePosition } from "../../entities/piecePosition"
import { PieceType } from "../../entities/pieceType"
import { Team } from "../../entities/team"

describe('BishopRule', () => {
  describe('isValidMove', () => {
    function call(position: PiecePosition, initialBoardState = INITIAL_BOARD_STATE, initialPosition: PiecePosition = { x: 5, y: 5 }) {
      return BishopRule.isValidMove(initialPosition, position, Team.WHITE, initialBoardState)
    }

    describe('when the piece moves diagonally forward and right', () => {
      describe('when final tile is occupied by a friend', () => {
        it('returns false', () => {
          const initialBoardState = [
            { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 6 }, team: Team.WHITE },
          ]
          expect(call({ x: 6, y: 6 }, initialBoardState)).toBe(false)
        })
      })

      describe('when final tile is not occupied by an friend', () => {
        it('returns true', () => {
          expect(call({ x: 6, y: 6 })).toBe(true)

          const initialBoardState = [
            { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 6 }, team: Team.BLACK },
          ]
          expect(call({ x: 6, y: 6 }, initialBoardState)).toBe(true)
        })
      })

      describe('when tile moves two square', () => {
        describe('when a passed tile is occupied', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 6 }, team: Team.WHITE },
            ]
            expect(call({ x: 7, y: 7 }, initialBoardState)).toBe(false)

            const initialBoardStateEnemy = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 6 }, team: Team.BLACK },
            ]
            expect(call({ x: 7, y: 7 }, initialBoardStateEnemy)).toBe(false)
          })
        })
        describe('when a passed tile is not occupied', () => {
          it('returns true', () => {
            expect(call({ x: 6, y: 6 }, undefined, { x: 4, y: 4 })).toBe(true)
          })
        })
      })
    })

    describe('when the piece moves diagonally forward and left', () => {
      describe('when final tile is occupied by a friend', () => {
        it('returns false', () => {
          const initialBoardState = [
            { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 6 }, team: Team.WHITE },
          ]
          expect(call({ x: 4, y: 6 }, initialBoardState)).toBe(false)
        })
      })

      describe('when final tile is not occupied by an friend', () => {
        it('returns true', () => {
          expect(call({ x: 4, y: 6 })).toBe(true)

          const initialBoardState = [
            { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 6 }, team: Team.BLACK },
          ]
          expect(call({ x: 4, y: 6 }, initialBoardState)).toBe(true)
        })
      })

      describe('when tile moves two square', () => {
        describe('when a passed tile is occupied', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 6 }, team: Team.WHITE },
            ]
            expect(call({ x: 3, y: 7 }, initialBoardState)).toBe(false)

            const initialBoardStateEnemy = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 6 }, team: Team.BLACK },
            ]
            expect(call({ x: 3, y: 7 }, initialBoardStateEnemy)).toBe(false)
          })
        })
        describe('when a passed tile is not occupied', () => {
          it('returns true', () => {
            expect(call({ x: 4, y: 6 }, undefined, { x: 6, y: 4 })).toBe(true)
          })
        })
      })
    })

    describe('when the piece moves diagonally down and right', () => {
      describe('when final tile is occupied by a friend', () => {
        it('returns false', () => {
          const initialBoardState = [
            { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 4 }, team: Team.WHITE },
          ]
          expect(call({ x: 6, y: 4 }, initialBoardState)).toBe(false)
        })
      })

      describe('when final tile is not occupied by an friend', () => {
        it('returns true', () => {
          expect(call({ x: 6, y: 4 })).toBe(true)

          const initialBoardState = [
            { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 4 }, team: Team.BLACK },
          ]
          expect(call({ x: 6, y: 4 }, initialBoardState)).toBe(true)
        })
      })

      describe('when tile moves two square', () => {
        describe('when a passed tile is occupied', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 4 }, team: Team.WHITE },
            ]
            expect(call({ x: 7, y: 3 }, initialBoardState)).toBe(false)

            const initialBoardStateEnemy = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 4 }, team: Team.BLACK },
            ]
            expect(call({ x: 7, y: 3 }, initialBoardStateEnemy)).toBe(false)
          })
        })
        describe('when a passed tile is not occupied', () => {
          it('returns true', () => {
            expect(call({ x: 6, y: 4 }, undefined, { x: 4, y: 6 })).toBe(true)
          })
        })
      })
    })

    describe('when the piece moves diagonally down and left', () => {
      describe('when final tile is occupied by a friend', () => {
        it('returns false', () => {
          const initialBoardState = [
            { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 4 }, team: Team.WHITE },
          ]
          expect(call({ x: 4, y: 4 }, initialBoardState)).toBe(false)
        })
      })

      describe('when final tile is not occupied by an friend', () => {
        it('returns true', () => {
          expect(call({ x: 4, y: 4 })).toBe(true)

          const initialBoardState = [
            { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 4 }, team: Team.BLACK },
          ]
          expect(call({ x: 4, y: 4 }, initialBoardState)).toBe(true)
        })
      })

      describe('when tile moves two square', () => {
        describe('when a passed tile is occupied', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 4 }, team: Team.WHITE },
            ]
            expect(call({ x: 3, y: 3 }, initialBoardState)).toBe(false)

            const initialBoardStateEnemy = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 4 }, team: Team.BLACK },
            ]
            expect(call({ x: 3, y: 3 }, initialBoardStateEnemy)).toBe(false)
          })
        })
        describe('when a passed tile is not occupied', () => {
          it('returns true', () => {
            expect(call({ x: 4, y: 4 }, undefined, { x: 6, y: 6 })).toBe(true)
          })
        })
      })
    })

    describe('when the part moves on the line', ()=> {
      it('returns false', () => {
        expect(call({ x: 6, y: 5 })).toBe(false)
        expect(call({ x: 4, y: 5 })).toBe(false)
        expect(call({ x: 5, y: 6 })).toBe(false)
        expect(call({ x: 5, y: 4 })).toBe(false)
      })
    })
  })
})
