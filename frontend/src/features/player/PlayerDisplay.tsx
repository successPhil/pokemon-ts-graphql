import CombatLog from "./CombatLog";
import PlayerMenu from "./PlayerMenu";
import './styles/playerDisplay.css'

const PlayerDisplay = () => {
    return (
        <div className="player-display">
            <CombatLog/>
            <PlayerMenu />
        </div>
    )
}

export default PlayerDisplay;