import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/pokemonsDetails.css'

const PokemonsDetail = () => {
  const {id}=useParams()

  const [pokemonCharacter,setPokemonCharacter]=useState({})

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>setPokemonCharacter(res.data))
  },[])

  console.log(pokemonCharacter);



  return (
    <div className='detail'>
      <h1>Pokemons Detail</h1>
      <p>Mostrando personaje con id:{id}</p>
      <h1>{pokemonCharacter.name}</h1>
      <img src={pokemonCharacter.sprites?.other["official-artwork"].front_default} alt=""/>
      
     
      
    </div>
  );
};

export default PokemonsDetail;