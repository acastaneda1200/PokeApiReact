
import React, { useEffect, useState } from 'react'
//import { fetchPokemon } from '../helpers/getPokemon'


export const PokemonItem = (dataDetalle) => {



   const imagen = dataDetalle.sprites?.other["official-artwork"].front_default

  

  


  return (
    <>
     

          <div >
            <div className="col">
              <div className="card">
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{dataDetalle.name}</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
      



    </>
  )
}
