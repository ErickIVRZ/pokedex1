import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonNameSlice = createSlice({
		name: 'pokemonName',
    initialState: "",
    reducers: {
      changeName:(state,action)=>{
        const PokemonName=action.payload
        return PokemonName
      }        
    }
})

export const {changeName} = pokemonNameSlice.actions;

export default pokemonNameSlice.reducer;
