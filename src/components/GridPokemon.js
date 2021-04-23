import React from 'react'
import { PokemonItem } from './PokemonItem'

export const GridPokemon = () => {
    return (

        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
               
                       <PokemonItem />
                
                </div>
            </div>


    )
}
