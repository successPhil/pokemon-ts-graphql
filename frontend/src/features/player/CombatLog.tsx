
import Pokeball from "../../styles/Pokeball"
import './styles/combatlog.css'

const CombatLog = () => {
    return (
        <div className="combatlog-container">
            <div className="combatlog-box">
                <div className="top-left-combatlog">
                <Pokeball/>
                </div>
                <div className="top-right-combatlog">
                <Pokeball/>
                </div>
                <div className="bottom-left-combatlog">
                <Pokeball/>
                </div>
                <div className="bottom-right-combatlog">
                <Pokeball/>
                </div>
            </div>
        </div>
    )
}

export default CombatLog