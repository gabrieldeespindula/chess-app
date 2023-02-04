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
import { WinModal } from "../WinModal";
import "./index.scss";

function Chessboard(): JSX.Element {
  const [pieces, setPieces] = useState<Piece[]>(INITIAL_BOARD_STATE);
  const [grabPosition, setGrabPosition] = useState<PiecePosition>({
    x: -1,
    y: -1,
  });
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
  const [promotionModal, setPromotionModal] = useState<{
    visible: boolean;
    team: Team;
    position: PiecePosition;
  }>({
    visible: false,
    team: Team.WHITE,
    position: { x: -1, y: -1 },
  });
  const [winModal, setWinModal] = useState({ visible: false, team: Team.WHITE });
  const [currentTeam, setCurrentTeam] = useState(Team.WHITE);
  const chessboardRef = useRef<HTMLDivElement>(null);
  const board: JSX.Element[] = [];

  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    const chessboard = chessboardRef.current;
    if (element.classList.contains("piece") && chessboard) {
      const xGrabPosition = Math.floor(
        (e.clientX - chessboard.offsetLeft) / 80
      );
      const yGrabPosition = Math.abs(
        Math.ceil((e.clientY - chessboard.offsetTop - 640) / 80)
      );

      const currentPiece = pieces.find((piece) =>
        comparePositions(piece.position, {
          x: xGrabPosition,
          y: yGrabPosition,
        })
      );

      if (currentPiece?.team === currentTeam) {
        setGrabPosition({
          x: xGrabPosition,
          y: yGrabPosition,
        });
        const x = e.clientX - 41;
        const y = e.clientY - 41;
        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        setActivePiece(element);
      }
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
    let endGame = false
    const updatePieces = pieces.reduce((results, piece) => {
      if(comparePositions(piece.position, position)){
        if(piece.type === PieceType.KING) endGame = true
      }
      if (piece === currentPiece) {
        piece.position = position;
        results.push(piece);
      } else if (!comparePositions(piece.position, position)) {
        results.push(piece);
      }

      return results;
    }, [] as Piece[]);

    setPieces(updatePieces);

    if(endGame) {
      setWinModal({visible: true, team: currentPiece.team})
      return
    }

    if (currentPiece.type == PieceType.PAWN && (position.y === 0 || position.y === 7)) {
      setPromotionModal({
        visible: true,
        team: currentPiece.team,
        position: position,
      });
      return;
    }
    setCurrentTeam(currentTeam === Team.WHITE ? Team.BLACK : Team.WHITE);
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

    setPromotionModal({
      visible: false,
      team: Team.WHITE,
      position: { x: -1, y: -1 },
    });

    setCurrentTeam(currentTeam === Team.WHITE ? Team.BLACK : Team.WHITE);
  }

  for (let y = VERTICAL_AXIS.length - 1; y >= 0; y--) {
    for (let x = 0; x < HORIZONTAL_AXIS.length; x++) {
      const number = x + y + 2;
      const image = pieces.find((piece) =>
        comparePositions(piece.position, { x, y })
      )?.image;

      let highlight = false;
      if (activePiece) {
        const currentPiece = pieces.find((p) =>
          comparePositions(p.position, grabPosition)
        );
        if (currentPiece) {
          highlight = RuleProxy.isValidMove(
            grabPosition,
            { x, y },
            currentPiece.type,
            currentPiece.team,
            pieces
          );
        }
      }

      board.push(
        <Tile
          key={`${x}${y}`}
          number={number}
          image={image}
          highlight={highlight}
        />
      );
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
      <div id="footer">
        <div className="turn">
          <h2>
            Turn:
          </h2>
          <div
            style={{ backgroundImage: `url(assets/images/pawn_${currentTeam === Team.BLACK ? 'b' : 'w'}.png)` }}
            className="piece">
          </div>
        </div>
      </div>
      <PromotionModal
        onChoose={onPromotion}
        visible={promotionModal.visible}
        team={promotionModal.team}
      />
      <WinModal {...winModal} />
    </>
  );
}

export { Chessboard }
