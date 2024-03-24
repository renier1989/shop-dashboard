import { PokemonsGrid, PokemonsResponse, SinglePokemon } from "@/app/pokemons";
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
            <PokemonsGrid pokemons={pokemons}/>
        </div>
    );
}