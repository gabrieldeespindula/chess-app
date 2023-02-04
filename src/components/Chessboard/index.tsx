import { useRef, useState } from "react";
import { HORIZONTAL_AXIS, VERTICAL_AXIS } from "../../constants/axis";
import { INITIAL_BOARD_STATE } from "../../constants/initialBoardState";
import { Piece } from "../../entities/piece";
import { PiecePosition } from "../../entities/piecePosition";
import { PieceType } from "../../entities/pieceType";
import { Team } from "../../entities/team";
import { comparePositions } from "../../helpers/comparePositions";
import { RuleProxy } from "../../rules/RuleProxy";
import { PromotionModal } from "../PromotionModal";
import { Tile } from "../Tile";
import "./index.scss";

function Chessboard(): JSX.Element {
  const [pieces, setPieces] = useState<Piece[]>(INITIAL_BOARD_STATE);
  const [grabPosition, setGrabPosition] = useState<PiecePosition>({
    x: -1,
    y: -1,
  });
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [promotionModal, setPromotionModal] = useState<{visible: boolean, team: Team, position: PiecePosition}>({
    visible: false,
    team: Team.WHITE,
    position: {x: -1, y: -1}
  });
  const chessboardRef = useRef<HTMLDivElement>(null);
  const board: JSX.Element[] = [];

  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    const chessboard = chessboardRef.current;
    if (element.classList.contains("piece") && chessboard) {
      setGrabPosition({
        x: Math.floor((e.clientX - chessboard.offsetLeft) / 80),
        y: Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 640) / 80)),
      });
      const x = e.clientX - 41;
      const y = e.clientY - 41;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      setActivePiece(element);
    }
  }

  function movePiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 8;
      const minY = chessboard.offsetTop - 8;
      const maxX = chessboard.offsetLeft + chessboard.offsetWidth - 72;
      const maxY = chessboard.offsetTop + chessboard.offsetHeight - 70;
      const x = e.clientX - 41;
      const y = e.clientY - 41;
      activePiece.style.position = "absolute";

      const xValue = x < minX ? minX : x > maxX ? maxX : x;
      activePiece.style.left = `${xValue}px`;

      const yValue = y < minY ? minY : y > maxY ? maxY : y;
      activePiece.style.top = `${yValue}px`;
    }
  }

  function dropPiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const x = Math.floor((e.clientX - chessboard.offsetLeft) / 80);
      const y = Math.abs(
        Math.ceil((e.clientY - chessboard.offsetTop - 640) / 80)
      );

      const currentPiece = pieces.find((piece) =>
        comparePositions(piece.position, grabPosition)
      );

      if (currentPiece) {
        const validMove = RuleProxy.isValidMove(
          grabPosition,
          { x, y },
          currentPiece.type,
          currentPiece.team,
          pieces
        );

        if (validMove) {
          updatePiecePosition(currentPiece, { x, y });
        }
      }

      activePiece.style.position = "relative";
      activePiece.style.removeProperty("left");
      activePiece.style.removeProperty("top");
      setActivePiece(null);
    }
  }

  function updatePiecePosition(currentPiece: Piece, position: PiecePosition) {
    const updatePieces = pieces.reduce((results, piece) => {
      if (piece === currentPiece) {
        piece.position = position;
        results.push(piece);
      } else if (!comparePositions(piece.position, position)) {
        results.push(piece);
      }

      return results;
    }, [] as Piece[]);

    setPieces(updatePieces);
    if ((currentPiece.type == PieceType.PAWN && (position.y === 0 || position.y === 7))) {
      setPromotionModal({ visible: true, team: currentPiece.team, position: position });
      return;
    }
  }

  function onPromotion(pieceType: PieceType, image: string) {
    const updatePieces = pieces.reduce((results, piece) => {
      if (comparePositions(piece.position, promotionModal.position)) {
        piece.type = pieceType;
        piece.image = image;
        results.push(piece);
      } else {
        results.push(piece);
      }

      return results;
    }, [] as Piece[]);

    setPieces(updatePieces);

    setPromotionModal({ visible: false, team: Team.WHITE, position: {x: -1, y: -1} });
  }

  for (let y = VERTICAL_AXIS.length - 1; y >= 0; y--) {
    for (let x = 0; x < HORIZONTAL_AXIS.length; x++) {
      const number = x + y + 2;
      const image = pieces.find((piece) =>
        comparePositions(piece.position, { x, y })
      )?.image;

      board.push(<Tile key={`${x}${y}`} number={number} image={image} />);
    }
  }

  return (
    <>
      <h1 className="t-center">Chessboard</h1>
      <div
        onMouseMove={movePiece}
        onMouseDown={grabPiece}
        onMouseUp={dropPiece}
        id="chessboard"
        ref={chessboardRef}
      >
        {board}
      </div>
      <PromotionModal onChoose={onPromotion} visible={promotionModal.visible} team={promotionModal.team} />
    </>
  );
}

export { Chessboard };
