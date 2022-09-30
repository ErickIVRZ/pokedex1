import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/pokemonCard.css'

const PokemonCard = ({url}) => {

const [pokemon,setPokemon]=useState({})

const navigate=useNavigate()






useEffect(()=>{
  axios.get(url)
  .then(res=>setPokemon(res.data))
},[])


  return (
    <div className='pokemonCard' onClick={()=>navigate(`/pokemons/${pokemon.id}`)}>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites?.other["official-artwork"].front_default} alt=""  style={{height:"90px",margin:"30px"}}/>
           
    </div>
  );
};

export default PokemonCard;