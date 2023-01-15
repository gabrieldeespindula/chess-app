import { comparePositions } from "./comparePositions"

describe('Helper: Compare Positions', () => {

  describe('when positions are the same', () => {
    it('returns true', () => {
      expect(comparePositions({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(true)
    })
  })

  describe('when positions are different', () => {
    it('returns false', () => {
      expect(comparePositions({ x: 0, y: 0 }, { x: 0, y: 1 })).toBe(false)
    })
  })
})
