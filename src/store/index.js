import { configureStore } from '@reduxjs/toolkit'
import  pokemonNameSlice  from './slices/pokemonName.slice'

export default configureStore({
  reducer: {
    pokemonName:pokemonNameSlice
	}
})