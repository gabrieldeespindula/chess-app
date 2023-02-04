import { PieceType } from "../../entities/pieceType";
import { Team } from "../../entities/team";
import "./index.scss";

type Props = {
  visible: boolean;
  team: Team;
};

function WinModal({ team, visible }: Props) {

  const teamName = team === Team.BLACK ? "Black" : "White";

  if(!visible) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>{teamName} win!!!</h1>
      </div>
    </div>
  );
}

export { WinModal }
