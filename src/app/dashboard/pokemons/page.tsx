import { PokemonsResponse, SinglePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0): Promise<SinglePokemon[]> => {
    const pokeData: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(rs => rs.json());

    const pokemons = pokeData.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));

    return pokemons;
}


export default async function PokemosPage() {

    const pokemons = await getPokemons(151);


    return (
        <div className=" flex  flex-col">
            <div className="flex flex-wrap gap-10  items-center justify-center">

                {pokemons.map(poke => (
                    <div key={poke.id}>
                        <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
                        width={100}
                        height={100}
                        alt={poke.name}
                        />
                    </div>

                ))}



            </div>
        </div>
    );
}