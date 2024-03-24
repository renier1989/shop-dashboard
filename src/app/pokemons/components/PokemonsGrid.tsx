import { SinglePokemon } from ".."
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons : SinglePokemon[];
}

export const PokemonsGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gap-10  items-center justify-center">

                {pokemons.map(poke => (
                    <div key={poke.id}>
                        <PokemonCard pokemon={poke}/>
                        
                    </div>

                ))}



            </div>
  )
}
