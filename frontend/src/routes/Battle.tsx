
import Enemy from '../features/enemy/Enemy';
import Player from '../features/player/Player';
import PlayerDisplay from '../features/player/PlayerDisplay';
// import SingleProjectile from '../features/attack-animations/SingleProjectile';
import { PokemonType } from '../constants/pokemon';
import MultiProjectile from '../features/attack-animations/MultiProjectile';
import { useState } from 'react';




// Creates a new Component BattleLayout composed of Enemy and Player
const BattleLayout = (): React.ReactNode => {
    return (
    
    <>
        <section className="enemy-player">
            <Enemy />
        </section>
        <section className="player">
            <Player />
        </section>
    </>)
}

const Battle = () => {
    const [playerTurn, setPlayerTurn] = useState(true);

    const togglePlayerTurn = () => setPlayerTurn(!playerTurn)

    const handleClick = () => togglePlayerTurn()


    
    


    return (
        <>
            <BattleLayout />
            <button onClick={handleClick}>Change Player Turn</button>
            {playerTurn && (
                <MultiProjectile moveType={PokemonType.Electric} />
            )}
            <PlayerDisplay/>
            {/* <SingleProjectile moveType={PokemonType.Normal} /> */}
            
        </>
    )

}

export default Battle;