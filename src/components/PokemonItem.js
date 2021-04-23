import React, { useEffect, useState } from 'react'
//import { fetchPokemon } from '../helpers/getPokemon'


export const PokemonItem = () => {

    const [pokemon, setPokemon] = useState({})

    
    useEffect(()=> {
        fetchPokemons();
    }, [])
  
     const getPokemon = async (idPokemon) => {


        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        const data = await url.json();
        
     
        
        
        console.log(data);
        setPokemon(data)
        
      }

      const fetchPokemons = async () => {
        for (let i = 1; i < 10; i++) {
      
          await getPokemon(i);
        }
      
      }
  
    return (
        <>
          
                    <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
             
          
        </>
    )
}
