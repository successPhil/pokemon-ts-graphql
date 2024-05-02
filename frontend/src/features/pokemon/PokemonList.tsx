import { useQuery } from "@apollo/client";
import { GET_POKEMON, GET_SHINY } from "../../api/pokemonCalls";
import { Pokemon } from "../../interfaces/pokemon";


interface PokemonListProps {
    isShiny?: boolean;
}

const PokemonList: React.FC<PokemonListProps> = ({isShiny}) => {
    // Query shiny if shiny, pokemon if not
    const query = isShiny ? GET_SHINY : GET_POKEMON;
    const { loading, error, data} = useQuery(query)

    if (loading) return <p>Loading Pokemon...</p>
    if (error) return <p>Error: {error.message}</p>
    // Pokemon data is a list of Pokemon or an empty list
    const pokemonData: Pokemon[] = data?.pokemons || [];

    return (
     
        <div className='pokemon-cards'>
          {isShiny ? (
            <ul>
            {pokemonData.map((pokemon) => (
              <li key={pokemon.id}>
                <h3>{pokemon.name}</h3>
                <p>Types: {pokemon.types}</p>
                <img className='pokemon-card-img' src={pokemon.front_shiny} alt={pokemon.name} />
              </li>
            ))}
          </ul>
          ) : (
            <ul>
        {pokemonData.map((pokemon) => (
          <li key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <p>Types: {pokemon.types}</p>
            <img className='pokemon-card-img' src={pokemon.front_default} alt={pokemon.name} />
          </li>
        ))}
      </ul>
          )}
      </div>
   
    )
}

export default PokemonList;