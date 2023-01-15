import { Rule } from "."
import { INITIAL_BOARD_STATE } from "../../constants/initialBoardState"
import { Team } from "../../entities/team"

describe('Rule', () => {
  describe('tileIsOccupied', () => {
    it('returns true if the tile is occupied', () => {
      const position = { x: 0, y: 0 }
      const result = Rule.tileIsOccupied(position, INITIAL_BOARD_STATE)
      expect(result).toBe(true)
    })

    it('returns false if the tile is not occupied', () => {
      const position = { x: 0, y: 2 }
      const result = Rule.tileIsOccupied(position, INITIAL_BOARD_STATE)
      expect(result).toBe(false)
    })
  })

  describe('tileIsOccupiedByEnemy', () => {
    it('returns true if the tile is occupied by an enemy', () => {
      const position = { x: 0, y: 0 }
      const result = Rule.tileIsOccupiedByEnemy(position, INITIAL_BOARD_STATE, Team.BLACK)
      expect(result).toBe(true)
    })

    it('returns false if the tile is not occupied', () => {
      const position = { x: 0, y: 2 }
      const result = Rule.tileIsOccupiedByEnemy(position, INITIAL_BOARD_STATE, Team.WHITE)
      expect(result).toBe(false)
    })

    it('returns false if the tile is occupied by a friendly piece', () => {
      const position = { x: 0, y: 0 }
      const result = Rule.tileIsOccupiedByEnemy(position, INITIAL_BOARD_STATE, Team.WHITE)
      expect(result).toBe(false)
    })
  })
})
