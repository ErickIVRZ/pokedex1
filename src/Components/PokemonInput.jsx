import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/pokemonName.slice';
import '../assets/pokemonInput.css'


const PokemonInput = () => {


const dispatch=useDispatch()
const [pokemonName,setPokemonName]=useState("")

const navigate=useNavigate()


const dispatchPokemonName=()=>{
  dispatch(changeName(pokemonName))

  //*Navigate me permite navegar en la ruta que ponga dentro de los parentesis
  navigate("/pokemons")
}


  return (
    <div className='trainer'>
      <h1>Hello Trainer</h1>
      <div className='img-trainer'></div>

      <div>
      <input className='input1' type="text"
      value={pokemonName}
      onChange={e=> setPokemonName(e.target.value)}      
      />
      <button className='button' onClick={dispatchPokemonName}>
      <i className="fa-regular fa-paper-plane"></i>
      </button>

</div>
     
      
      
      
    </div>
  );
};


export default PokemonInput;