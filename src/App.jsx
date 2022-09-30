import { HashRouter,Routes,Route } from 'react-router-dom'

import './App.css'
import PokemonInput from './Components/PokemonInput'
import Pokemons from './Components/Pokemons'
import PokemonsDetail from './Components/PokemonsDetail'
import ProtectedRoutes from './Components/ProtectedRoutes'


function App() {
 

  return (
    <HashRouter>
    <div className="App">
      
        <Routes>
          <Route path="/" element={<PokemonInput/>}/>

          <Route element={<ProtectedRoutes/>}>
          <Route path="/pokemons" element={<Pokemons/>}/>
          <Route path="/pokemons/:id" element={<PokemonsDetail/>}/>

          </Route>




         
        </Routes>     
    </div>

    </HashRouter>
  )
}

export default App
