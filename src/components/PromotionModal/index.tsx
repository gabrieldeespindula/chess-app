import { PieceType } from "../../entities/pieceType";
import { Team } from "../../entities/team";
import "./index.scss";

type Props = {
  visible: boolean;
  team: Team;
  onChoose: (piece: PieceType, image: string) => void;
};

function PromotionModal({ visible, team, onChoose }: Props) {
  const color = team === Team.BLACK ? "b" : "w";

  const pieces = [
    { type: PieceType.ROOK, image: `assets/images/rook_${color}.png` },
    { type: PieceType.KNIGHT, image: `assets/images/knight_${color}.png` },
    { type: PieceType.BISHOP, image: `assets/images/bishop_${color}.png` },
    { type: PieceType.QUEEN, image: `assets/images/queen_${color}.png` },
  ];

  if (!visible) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="piece-list">
          {pieces.map((piece, key) => (
            <div
              key={key}
              className="piece"
              onClick={() => onChoose(piece.type, piece.image)}
              style={{ backgroundImage: `url(${piece.image})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { PromotionModal };
