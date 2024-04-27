import { SinglePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
    // '1':{id:'1',name:'Bulbasaur'}
}

const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    toggleFavorite(state, action:PayloadAction<SinglePokemon>){
        // primero se evaluar si el pokemon existe en el state
        const pokemon = action.payload
        const {id}= pokemon
        // si existe elimino del state el pokemon
        if(!!state[id]){
            delete state[id];
            return;
        }
        // si no existe lo agrego al state
        state[id] = pokemon

    }
  }
});

export const { toggleFavorite } = PokemonsSlice.actions

export default PokemonsSlice.reducer