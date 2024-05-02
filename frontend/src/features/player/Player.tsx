import ProgressBar from "../../utils/ProgressBar"
import jolteon from '../../assets/jolteon-player-attack.png'

const Player = () => {
    return (
        <div className="player-container">
        <img src={jolteon} alt="player pokemon" className="player-poke"/>
        <ProgressBar value={65} maxValue={100} color='#DB162F'/>
        <ProgressBar value={420} maxValue={1000} color='yellow'/>

        </div>
    )
}

export default Player;