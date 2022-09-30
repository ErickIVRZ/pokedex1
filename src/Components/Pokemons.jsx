import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import '../assets/pokemons.css'


const Pokemons = () => {

  const navigate=useNavigate()
const name=useSelector(state=>state.pokemonName)
const [pokemonList,setPokemonList]=useState([])
const [inputSearch,setInputSearch]=useState("")
const [pokemonsType,setPokemonsType]=useState([])

useEffect(()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1155`)
  .then(res=>setPokemonList(res.data.results))

axios.get(`https://pokeapi.co/api/v2/type/`)
.then(res=>setPokemonsType(res.data.results))



},[])
console.log(pokemonList);


const searchId=()=>{

  navigate(`/pokemons/${inputSearch}`)  
}

const searchLocation=(typeUrl)=>{
  alert(typeUrl)
  axios.get(typeUrl)
  .then(res=>setPokemonList(res.data.pokemon))
}

const [page,setPage]=useState(1)
const pokemonPerPage=5;
const lastPokemonIndex= page*pokemonPerPage;
const firstPokemonIndex=lastPokemonIndex-pokemonPerPage
const pokemonPaginated=pokemonList.slice(
  firstPokemonIndex,
  lastPokemonIndex
)



const totalPage= Math.ceil (pokemonList.length/pokemonPerPage)  

const pagesNumbers=[]

for (let i= 1;i<=totalPage; i++) {
  
  pagesNumbers.push(i)
}



  return (
    <div className='pokemonContainer'>

      <div>
      <h1>Pokemons</h1>
      <p>Bienvenido {name}</p>
      </div>
      

      <div className='input'>
        <input type="text" 
        placeholder='buscar por id o nombre'
        value={inputSearch}
        onChange={e=>setInputSearch(e.target.value)}        
        
        />
        <button onClick={searchId}>Search</button>
      </div>

      <div >
        <select onChange={e=>searchLocation(e.target.value)}>
          <option value="">Selecciona un tipo</option>
          {
            pokemonsType.map(pokemon=>(
              <option value={pokemon.url} key={pokemon.url}>
                {pokemon.name}
              </option>
            ))
          }

         
        </select>

      </div>


          <div className='pokemonsCard'>

      {
        pokemonPaginated.map(pokemon=>(
          <PokemonCard 
          key={pokemon.url?pokemon.url:pokemon.pokemon.url} 
          url={pokemon.url?pokemon.url:pokemon.pokemon.url}/>
        ))
      }
      </div>

      <div>

<button onClick={()=>setPage(page-1)}
      disabled={page ===1}
      
      >Prev Page
      </button>
      {
        pagesNumbers.map(number=>(
          <button key={number} onClick={()=>setPage(number)}>{number}</button>
        ))

      }
      <button onClick={()=>setPage(page+1)}
      disabled={page===totalPage}
      >Next Page</button>

</div>
      
    </div>
  );
};

export default Pokemons;