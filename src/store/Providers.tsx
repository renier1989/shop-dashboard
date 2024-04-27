'use client';
import React, { useEffect } from 'react'
import { store } from './'
import { Provider } from 'react-redux'
import { setFavoritePokemons } from './pokemons/PokemonsSlice';

interface Props {
    children: React.ReactNode
}

export const Providers = ({children}:Props) => {

  useEffect(() => {
    const localPokes = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
    store.dispatch( setFavoritePokemons(localPokes))
  }, [])
  

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
