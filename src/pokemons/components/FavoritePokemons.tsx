'use client'
import { PokemonsGrid } from "@/pokemons"
import { useAppSelector } from "@/store";
import { useState } from "react";
import { MdHeartBroken } from "react-icons/md";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector(state => Object.values(state.pokemons));
  const [favorites, setFavorites] = useState(pokemons)
  return (
    <>
      {
        pokemons.length ? (<PokemonsGrid pokemons={favorites} />) : (<NoPokemonsFavorites />)
      }
    </>
  )
}

const NoPokemonsFavorites = () => {
  return (
    <div className="flex flex-col items-center h-[50vh] justify-center">
      <MdHeartBroken size={100} className="text-red-600"/>
      <p className="font-bold text-2xl">No has agregado Pokemons Favoritos!</p>
    </div>
  );
}
