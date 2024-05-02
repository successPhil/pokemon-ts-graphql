import Pokeball from "../../styles/Pokeball";
import MenuButtons from "./menu/MenuButtons";
import './styles/menu.css'
const PlayerMenu = () => {
    return (
        <div className="player-menu-container">
            <div className="player-menu-box">
            <div className="top-left-menu">
                <Pokeball/>
                </div>
                <div className="top-right-menu">
                <Pokeball/>
                </div>
                <div className="bottom-left-menu">
                <Pokeball/>
                </div>
                <div className="bottom-right-menu">
                <Pokeball/>
                </div>
                <MenuButtons/>
            </div>
        </div>
    )
}

export default PlayerMenu;