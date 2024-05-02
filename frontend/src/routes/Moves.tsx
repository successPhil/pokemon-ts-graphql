import { useQuery } from "@apollo/client";
import { GET_POKEMON_MOVES } from "../api/pokemonCalls";
import { PokemonMove } from "../interfaces/PokemonMove";
import { typeToIcon } from "../constants/typeToIcon";
import "./styles/moves.css"





const Moves = () => {
    // setup useQuery hook
    const {error, loading, data} = useQuery(GET_POKEMON_MOVES)
    // state for storing move data
    if (loading){
        return <p>Loading...</p>
    }
    if (error){
        return <p>Error</p>
    }

    const pokemonMoveData: PokemonMove[] = data?.moves || [];

    return (
        <>
        <div className="moves-container">
            {pokemonMoveData?.map((move) => (
                <div key={move.id} className={`move-card`}>
                    <span className={`move-icon ${move.type}`}>{typeToIcon[move.type]}</span>
                    <div className="move-details">
                        <h4>{move.name}</h4>
                        <p className={`${move.type}`}><span style={{color: '#D1C8E1'}}>Type: </span>{move.type}</p>
                        <p>Damage: {move.damage}</p>
                    </div>
                </div>
            ))}
        </div>
        </>

    )
}


export default Moves;