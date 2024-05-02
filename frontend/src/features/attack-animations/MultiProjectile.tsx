
import { PokemonType } from "../../constants/pokemon"
import fire from '../../assets/attack-types/fire-attack.png'
import water from '../../assets/attack-types/water.png'
import grass from '../../assets/attack-types/leaf.png'
import electric from '../../assets/attack-types/electric-attack.png'
import ground from '../../assets/attack-types/ground.png'
import rock from '../../assets/attack-types/rock.png'
import normal from '../../assets/attack-types/normal.png'
import './attack-styles/multiProjectiles.css'

import { SingleProjectileProps } from "../../interfaces/SingleProjectileProps"


const MultiProjectile: React.FC<SingleProjectileProps> = ({moveType}) => {

    
    const attackImageMap: Record<PokemonType, string> = {
        [PokemonType.Fire]: fire,
        [PokemonType.Water]: water,
        [PokemonType.Grass]: grass,
        [PokemonType.Flying]: "none",
        [PokemonType.Psychic]: "none",
        [PokemonType.Ghost]: "none",
        [PokemonType.Dragon]: "none",
        [PokemonType.Fairy]: "none",
        [PokemonType.Electric]: electric,
        [PokemonType.Steel]: "none",
        [PokemonType.Fighting]: "none",
        [PokemonType.Ice]: "none",
        [PokemonType.Normal]: normal,
        [PokemonType.Bug]: "none",
        [PokemonType.Rock]: rock,
        [PokemonType.Poison]: "none",
        [PokemonType.Ground]: ground,
    }

    const selectedAttack = attackImageMap[moveType]




    

    

    return (
        <div className="multi-player-attack">
            <img src={selectedAttack} className="multi-move-type-1" />
            <img src={selectedAttack} className="multi-move-type-2" />
            <img src={selectedAttack} className="multi-move-type-3" />
            <img src={selectedAttack} className="multi-move-type-4" />
        </div>
    )
}

export default MultiProjectile;