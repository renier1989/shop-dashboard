'use client'
import { PokemonsGrid } from "@/pokemons"
import { useAppSelector } from "@/store";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector(state => state.pokemons);
  const favoritePokemons=Object.values(pokemons);

  return (
    <PokemonsGrid pokemons={favoritePokemons} />
  )
}
