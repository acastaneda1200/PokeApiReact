import React, { useState } from 'react'
import { fetchPokemon } from '../helpers/getPokemon'


export const PokemonItem = () => {

    const [state, setState] = useState({
        data: [],

    })
  


    fetchPokemon().then( poke => {
        setState({
            data: poke,
        })
    })
     
    console.log(state);
    
   

   
    
    return (
        <div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>
    )
}
