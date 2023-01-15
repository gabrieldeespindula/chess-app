import { RuleProxy } from "."
import { PieceType } from "../../entities/pieceType"
import { Team } from "../../entities/team"
import { PawnRule } from "../Pawn"

describe('RuleProxy', () => {
  describe('isValidMove', () => {
    describe('when the piece is a pawn', () => {
      it('calls the pawn rule', () => {
        const pawnRuleIsValidMove = jest.spyOn(PawnRule, 'isValidMove')
        RuleProxy.isValidMove({ x: 0, y: 0 }, { x: 0, y: 0 }, PieceType.PAWN, Team.WHITE, [])
        expect(pawnRuleIsValidMove).toHaveBeenCalled()
      })
    })

    describe('when the piece is not found', () => {
      it('returns false', () => {
        expect(RuleProxy.isValidMove({ x: 0, y: 0 }, { x: 0, y: 0 }, PieceType.ROOK, Team.WHITE, [])).toBe(false)
      })
    })
  })
})
