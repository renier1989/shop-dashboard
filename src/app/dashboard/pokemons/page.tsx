import { PokemonsGrid, PokemonsResponse, SinglePokemon } from "@/pokemons";

export const metadata = {
    title: '151 Pokemons',
    description: 'Pagina de los primeros pokemons'
}

const getPokemons = async (limit = 20, offset = 0): Promise<SinglePokemon[]> => {
    const pokeData: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(rs => rs.json());

    const pokemons = pokeData.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));

    // throw new Error('Esto es un error de la pagina de los pokemons');

    return pokemons;
}


export default async function PokemosPage() {

    const pokemons = await getPokemons(151);


    return (
        <div className=" flex  flex-col">
            <h1 className="text-3xl font-semibold">Listado de Pokemons <span className="text-blue-700">Estaticos</span> </h1>
            <PokemonsGrid pokemons={pokemons}/>
        </div>
    );
}