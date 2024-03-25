import { PokemonResponse } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: { id: string}
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const { id , name} = await getPokemon(params.id);
  return {
    title: `(${id}) - ${name}`,
    description : `Pagin de ${name}`
  }
}

const getPokemon = async (id:string):Promise<PokemonResponse>=>{
  const pokeInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache'
  })
  .then(rs => rs.json());
  console.log(pokeInfo.name);
  return pokeInfo
}

export default async function PokemonPage({params}: Props) {
  const {id} = params
  const pokemon = await getPokemon(id);
  return (
    <div>
      <h1>Hello Page Pokemon {id}</h1>
      <span>
        {pokemon.name}
      </span>
    </div>
  );
}