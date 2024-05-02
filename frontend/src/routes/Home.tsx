import PokemonList from "../features/pokemon/PokemonList"
import charizard from "../assets/charizard-front-attack.png"
import jolteon from '../assets/jolteon-player-attack.png'
import './styles/home.css'
const Home = () => {
    return (
        <div className="home-container">
            
        <div className='intro-container'>
            <div className='top-image-container'>
                <img src={charizard} alt="charizard"/>
            </div>
            <div className='bot-image-container'>
                <img src={jolteon} alt="jolteon"/>
            </div>
        </div>

        <div className="gen-1-list">
        <PokemonList/>
        <PokemonList isShiny={true}/>
        </div>

        </div>
    )
}

export default Home;