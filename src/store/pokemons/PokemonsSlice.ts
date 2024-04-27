import { SinglePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// estructura de como se van a almacenar los pokemons favoritos
// {
    // favorites:{
        //     '1':{id:'1',name:'Bulbasaur'},
        //     '2':{id:'2',name:'Bulbasaur'},
        //     '3':{id:'3',name:'Bulbasaur'},
    // }
// }
interface PokemonsFavorites {
    favorites: {[key:string]: SinglePokemon}
}

// const getLocalPokemons = ():PokemonsFavorites =>{
//     const localPokes = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
//     return localPokes;
// }

const initialState:PokemonsFavorites = {
    favorites:{}
    // ...getLocalPokemons()
    // '1':{id:'1',name:'Bulbasaur'}
}

const PokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state,action:PayloadAction<{[key:string]: SinglePokemon}>){
        state.favorites = action.payload
    },
    toggleFavorite(state, action:PayloadAction<SinglePokemon>){
        // primero se evaluar si el pokemon existe en el state
        const pokemon = action.payload
        const {id}= pokemon
        // si existe elimino del state el pokemon
        if(!!state.favorites[id]){
            delete state.favorites[id];
            // return;
        }else{
            // si no existe lo agrego al state
            state.favorites[id] = pokemon
        }

        // aqui ponemos los pokemons en el localstorage
        // NOTA: ESTO ES ALGO QUE NO ESTA RECOMENADO HACER EN REDUX
        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));

    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = PokemonsSlice.actions

export default PokemonsSlice.reducer