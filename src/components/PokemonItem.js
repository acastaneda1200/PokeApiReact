
import React, { useEffect, useState } from 'react'
//import { fetchPokemon } from '../helpers/getPokemon'


export const PokemonItem = () => {

  const [pokemon, setPokemon] = useState([{
    dataSimple: [],
    dataDetalle: [],

  }])


  useEffect(() => {
     getPokemon();
  }, [])

  const getPokemon = async () => {


    const urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5`);
    const { results } = await urlFetch.json();
    
    
    
    const dataPokemon = await Promise.all(
      results.map( async (pok) => {
      
        const {url} = pok
        const urlFetch = await fetch(url);
        const dataPorPokemon  = await urlFetch.json();
  
        //return pok
        return  {
          dataSimple : pok,
          dataDetalle : dataPorPokemon,
        }
      })



    ) 
    setPokemon(dataPokemon)
   // console.log(dataPokemon);
  
   pokemon.map(  (dataDetalle) => {
     console.log(dataDetalle);
   })

  }

  //console.log(pokemon);

  return (
    <>
      {
        pokemon.map(  ({dataSimple, dataDetalle}) => (

          <div key={dataSimple.name}>
            <div className="col">
              <div className="card">
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{dataSimple.name}</h5>
                  <p className="card-text">{dataDetalle.id}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      }



    </>
  )
}
