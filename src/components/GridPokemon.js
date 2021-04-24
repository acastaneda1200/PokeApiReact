import React from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { PokemonItem } from './PokemonItem'

export const GridPokemon = () => {



    const pokemosCard = useFetchPokemon();


    return (

        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    pokemosCard.map(({ dataSimple, dataDetalle }) => (
                        <PokemonItem
                            key={dataSimple.name + dataDetalle.id }
                            {...dataDetalle}
                        />
                    ))
                }


            </div>
        </>


    )
}
