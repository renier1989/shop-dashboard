import { SinglePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit'

// estructura de como se van a almacenar los pokemons favoritos
// {
//     '1':{id:'1',name:'Bulbasaur'},
//     '2':{id:'2',name:'Bulbasaur'},
//     '3':{id:'3',name:'Bulbasaur'},
// }
interface PokemonsFavorites {
    [key:string]: SinglePokemon
}

const initialState:PokemonsFavorites = {
    '1':{id:'1',name:'Bulbasaur'}
}

const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const {} = PokemonsSlice.actions

export default PokemonsSlice.reducer