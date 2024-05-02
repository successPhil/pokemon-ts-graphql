import ProgressBar from "../../utils/ProgressBar"
import charizard from '../../assets/charizard-front-attack.png'

const Enemy = () => {
    return (
        <div className="enemy-container">
        <img src={charizard} alt="player pokemon" className="enemy-poke"/>
        <ProgressBar value={65} maxValue={100} color='#DB162F'/>


        </div>
    )
}

export default Enemy;