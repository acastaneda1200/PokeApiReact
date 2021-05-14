import { useEffect, useState } from 'react'
import { getPokemon, searchApi } from '../helpers/getPokemon'

export const useFetchPokemon = () => {

    const [state, setState] = useState({
        data: [],
        loading: true,

    })

    useEffect(() => {

        getPokemon()
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
        loading: true,
    })
    useEffect(() => {
        if (inputValue.length > 2) {
           
            searchApi(inputValue).then(pokemon => {
                setState({
                    data: pokemon,
                    loading: false
                })
            })
        }
        else if (inputValue === ''){
          
            getPokemon().then(pokemon => {
                setState({
                    data: pokemon,
                    loading: false
                })
            })
        }

        
    }, [inputValue])


    return state;
}
