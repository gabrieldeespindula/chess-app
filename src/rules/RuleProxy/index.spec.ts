import { RuleProxy } from "."
import { PieceType } from "../../entities/pieceType"
import { Team } from "../../entities/team"
import { BishopRule } from "../Bishop"
import { KingRule } from "../King"
import { KnightRule } from "../Knight"
import { PawnRule } from "../Pawn"
import { QueenRule } from "../Queen"
import { RookRule } from "../Rook"

describe('RuleProxy', () => {
  describe('isValidMove', () => {
    describe('when the piece is a pawn', () => {
      it('calls the pawn rule', () => {
        const pawnRuleIsValidMove = jest.spyOn(PawnRule, 'isValidMove')
        RuleProxy.isValidMove({ x: 0, y: 0 }, { x: 0, y: 0 }, PieceType.PAWN, Team.WHITE, [])
        expect(pawnRuleIsValidMove).toHaveBeenCalled()
      })
    })

    describe('when the piece is a knight', () => {
      it('calls the knight rule', () => {
        const knightRuleIsValidMove = jest.spyOn(KnightRule, 'isValidMove')
        RuleProxy.isValidMove({ x: 0, y: 0 }, { x: 0, y: 0 }, PieceType.KNIGHT, Team.WHITE, [])
        expect(knightRuleIsValidMove).toHaveBeenCalled()
      })
    })

    describe('when the piece is a bishop', () => {
      it('calls the bishop rule', () => {
        const bishopRuleIsValidMove = jest.spyOn(BishopRule, 'isValidMove')
        RuleProxy.isValidMove({ x: 0, y: 0 }, { x: 0, y: 0 }, PieceType.BISHOP, Team.WHITE, [])
        expect(bishopRuleIsValidMove).toHaveBeenCalled()
      })
    })

    describe('when the piece is a rook', () => {
      it('calls the rook rule', () => {
        const rookRuleIsValidMove = jest.spyOn(RookRule, 'isValidMove')
        RuleProxy.isValidMove({ x: 0, y: 0 }, { x: 0, y: 0 }, PieceType.ROOK, Team.WHITE, [])
        expect(rookRuleIsValidMove).toHaveBeenCalled()
      })
    })

    describe('when the piece is a queen', () => {
      it('calls the queen rule', () => {
        const queenRuleIsValidMove = jest.spyOn(QueenRule, 'isValidMove')
        RuleProxy.isValidMove({ x: 0, y: 0 }, { x: 0, y: 0 }, PieceType.QUEEN, Team.WHITE, [])
        expect(queenRuleIsValidMove).toHaveBeenCalled()
      })
    })

    describe('when the piece is a king', () => {
      it('calls the king rule', () => {
        const kingRuleIsValidMove = jest.spyOn(KingRule, 'isValidMove')
        RuleProxy.isValidMove({ x: 0, y: 0 }, { x: 0, y: 0 }, PieceType.KING, Team.WHITE, [])
        expect(kingRuleIsValidMove).toHaveBeenCalled()
      })
    })

    describe('when the piece is not found', () => {
      it('returns false', () => {
        expect(RuleProxy.isValidMove({ x: 0, y: 0 }, { x: 0, y: 0 }, 6, Team.WHITE, [])).toBe(false)
      })
    })
  })
})
