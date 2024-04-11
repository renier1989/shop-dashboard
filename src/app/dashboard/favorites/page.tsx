import { PokemonsGrid, PokemonsResponse, SinglePokemon } from "@/pokemons";
import { title } from "process";


export const metadata = {
    title: 'Pokemons Favoritos',
    description: 'Pagina de mis pokemons favoritos'
}


export default async function PokemosPage() {

    
    return (
        <div className=" flex  flex-col">
            <h1 className="text-3xl font-semibold">Pokemons Favoritos <span className="text-blue-700">GlobalState</span> </h1>
            <PokemonsGrid pokemons={[]}/>
        </div>
    );
}