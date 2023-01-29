import { KingRule } from "."
import { INITIAL_BOARD_STATE } from "../../constants/initialBoardState"
import { PiecePosition } from "../../entities/piecePosition"
import { PieceType } from "../../entities/pieceType"
import { Team } from "../../entities/team"

describe('KingRule', () => {
  describe('isValidMove', () => {
    function call(position: PiecePosition, initialBoardState = INITIAL_BOARD_STATE, initialPosition: PiecePosition = { x: 5, y: 5 }) {
      return KingRule.isValidMove(initialPosition, position, Team.WHITE, initialBoardState)
    }

    describe('when the piece moves diagonally forward and right', () => {
      describe('when the piece moves one tile', () => {
        describe('when tile is occupied by a friend', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 6 }, team: Team.WHITE },
            ]
            expect(call({ x: 6, y: 6 }, initialBoardState)).toBe(false)
          })
        })

        describe('when tile is not occupied by an friend', () => {
          it('returns true', () => {
            expect(call({ x: 6, y: 6 })).toBe(true)

            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 6 }, team: Team.BLACK },
            ]
            expect(call({ x: 6, y: 6 }, initialBoardState)).toBe(true)
          })
        })
      })

      describe('when the piece moves more tiles', () => {
        it('returns false', () => {
          expect(call({ x: 7, y: 7 })).toBe(false)
          expect(call({ x: 8, y: 8 })).toBe(false)
        })
      })
    })

    describe('when the piece moves diagonally forward and left', () => {
      describe('when the piece moves one tile', () => {
        describe('when tile is occupied by a friend', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 6 }, team: Team.WHITE },
            ]
            expect(call({ x: 4, y: 6 }, initialBoardState)).toBe(false)
          })
        })

        describe('when tile is not occupied by an friend', () => {
          it('returns true', () => {
            expect(call({ x: 4, y: 6 })).toBe(true)

            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 6 }, team: Team.BLACK },
            ]
            expect(call({ x: 4, y: 6 }, initialBoardState)).toBe(true)
          })
        })
      })

      describe('when the piece moves more tiles', () => {
        it('returns false', () => {
          expect(call({ x: 3, y: 7 })).toBe(false)
          expect(call({ x: 2, y: 8 })).toBe(false)
        })
      })
    })

    describe('when the piece moves diagonally backward and right', () => {
      describe('when the piece moves one tile', () => {
        describe('when tile is occupied by a friend', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 4 }, team: Team.WHITE },
            ]
            expect(call({ x: 6, y: 4 }, initialBoardState)).toBe(false)
          })
        })

        describe('when tile is not occupied by an friend', () => {
          it('returns true', () => {
            expect(call({ x: 6, y: 4 })).toBe(true)

            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 4 }, team: Team.BLACK },
            ]
            expect(call({ x: 6, y: 4 }, initialBoardState)).toBe(true)
          })
        })
      })

      describe('when the piece moves more tiles', () => {
        it('returns false', () => {
          expect(call({ x: 7, y: 3 })).toBe(false)
          expect(call({ x: 8, y: 2 })).toBe(false)
        })
      })
    })

    describe('when the piece moves diagonally backward and left', () => {
      describe('when the piece moves one tile', () => {
        describe('when tile is occupied by a friend', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 4 }, team: Team.WHITE },
            ]
            expect(call({ x: 4, y: 4 }, initialBoardState)).toBe(false)
          })
        })

        describe('when tile is not occupied by an friend', () => {
          it('returns true', () => {
            expect(call({ x: 4, y: 4 })).toBe(true)

            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 4 }, team: Team.BLACK },
            ]
            expect(call({ x: 4, y: 4 }, initialBoardState)).toBe(true)
          })
        })
      })

      describe('when the piece moves more tiles', () => {
        it('returns false', () => {
          expect(call({ x: 3, y: 3 })).toBe(false)
          expect(call({ x: 2, y: 2 })).toBe(false)
        })
      })
    })

    describe('when the piece moves forward', () => {
      describe('when the piece moves one tile', () => {
        describe('when tile is occupied by a friend', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 5, y: 6 }, team: Team.WHITE },
            ]
            expect(call({ x: 5, y: 6 }, initialBoardState)).toBe(false)
          })
        })

        describe('when tile is not occupied by an friend', () => {
          it('returns true', () => {
            expect(call({ x: 5, y: 6 })).toBe(true)

            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 5, y: 6 }, team: Team.BLACK },
            ]
            expect(call({ x: 5, y: 6 }, initialBoardState)).toBe(true)
          })
        })
      })

      describe('when the piece moves more tiles', () => {
        it('returns false', () => {
          expect(call({ x: 5, y: 7 })).toBe(false)
          expect(call({ x: 5, y: 8 })).toBe(false)
        })
      })
    })

    describe('when the piece moves backward', () => {
      describe('when the piece moves one tile', () => {
        describe('when tile is occupied by a friend', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 5, y: 4 }, team: Team.WHITE },
            ]
            expect(call({ x: 5, y: 4 }, initialBoardState)).toBe(false)
          })
        })

        describe('when tile is not occupied by an friend', () => {
          it('returns true', () => {
            expect(call({ x: 5, y: 4 })).toBe(true)

            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 5, y: 4 }, team: Team.BLACK },
            ]
            expect(call({ x: 5, y: 4 }, initialBoardState)).toBe(true)
          })
        })
      })

      describe('when the piece moves more tiles', () => {
        it('returns false', () => {
          expect(call({ x: 5, y: 3 })).toBe(false)
          expect(call({ x: 5, y: 2 })).toBe(false)
        })
      })
    })

    describe('when the piece moves right', () => {
      describe('when the piece moves one tile', () => {
        describe('when tile is occupied by a friend', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 5 }, team: Team.WHITE },
            ]
            expect(call({ x: 6, y: 5 }, initialBoardState)).toBe(false)
          })
        })

        describe('when tile is not occupied by an friend', () => {
          it('returns true', () => {
            expect(call({ x: 6, y: 5 })).toBe(true)

            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 6, y: 5 }, team: Team.BLACK },
            ]
            expect(call({ x: 6, y: 5 }, initialBoardState)).toBe(true)
          })
        })
      })

      describe('when the piece moves more tiles', () => {
        it('returns false', () => {
          expect(call({ x: 7, y: 5 })).toBe(false)
          expect(call({ x: 8, y: 5 })).toBe(false)
        })
      })
    })

    describe('when the piece moves left', () => {
      describe('when the piece moves one tile', () => {
        describe('when tile is occupied by a friend', () => {
          it('returns false', () => {
            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 5 }, team: Team.WHITE },
            ]
            expect(call({ x: 4, y: 5 }, initialBoardState)).toBe(false)
          })
        })

        describe('when tile is not occupied by an friend', () => {
          it('returns true', () => {
            expect(call({ x: 4, y: 5 })).toBe(true)

            const initialBoardState = [
              { image: '', type: PieceType.KNIGHT, position: { x: 4, y: 5 }, team: Team.BLACK },
            ]
            expect(call({ x: 4, y: 5 }, initialBoardState)).toBe(true)
          })
        })
      })

      describe('when the piece moves more tiles', () => {
        it('returns false', () => {
          expect(call({ x: 3, y: 5 })).toBe(false)
          expect(call({ x: 2, y: 5 })).toBe(false)
        })
      })
    })
  })
})
