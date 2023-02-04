import { PiecePosition } from "../entities/piecePosition"

export function comparePositions(firstPosition: PiecePosition, secondPosition: PiecePosition): boolean{
  return firstPosition.x === secondPosition.x && firstPosition.y === secondPosition.y
}
