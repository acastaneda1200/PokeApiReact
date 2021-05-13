import { useEffect, useState } from 'react'
import { getPokemon, searchApi } from '../helpers/getPokemon'

export const useFetchPokemon = (inputValue) => {

    const [state, setState] = useState({
        data: [],
        loading: true,

    })

    useEffect(() => {

        getPokemon(inputValue)
            .then(pokemon => {

                setState({
                    data: pokemon,
                    loading: false
                })
            })
    }, [])

    return state;
}

export const useFetchSearchPokemon = (inputValue) => {

    const [state, setState] = useState({
        data: [],
    })
    useEffect(() => {
        if (inputValue.length > 2) {
            searchApi(inputValue).then(pokemon => {
                setState({
                    data: pokemon,
                })
            })
        }
        else if (inputValue.length === 0){
          
            getPokemon().then(pokemon => {
                setState({
                    data: pokemon,
                })
            })
        }

        
    }, [inputValue])


    return state;
}
