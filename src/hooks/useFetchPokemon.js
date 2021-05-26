import { useCallback, useEffect, useState } from 'react'
import { getPokemon, searchApi } from '../helpers/getPokemon'
import { getPokemonByName } from '../helpers/getPokemonByName'

export const useFetchPokemonByName = (name) => {

    const [state, setState] = useState({
        data: [],
        loading: true,

    })

    useEffect(() => {

        getPokemonByName(name)
            .then(pokemon => {
                
                setState({
                    loading: false,
                    data: pokemon,
                })
            })
    }, [name])
   
    return state;
}



export const useFetchSearchPokemon = (inputValue = '') => {

    const [loading, setLoading] = useState(true)
    const [state, setState] = useState({
        data: [],

    })
    const [offset, setOffset] = useState(0);

    const previousPage = useCallback(() => {
        setLoading(true)
        setOffset(offset - 20)
      }, [offset])

      const nextPage = useCallback(() => {
        setLoading(true)
        setOffset(offset + 20)
      }, [offset])

    useEffect(() => {
        if (inputValue.length > 2) {

            searchApi(inputValue).then(pokemon => {
                setLoading(false)
                setState({
                    data: pokemon,
                })
            })
        }
    }, [inputValue])

    useEffect(() => {

        if (inputValue.length === 0) {

            getPokemon(offset).then(pokemon => {
                setLoading(false)
                setState({
                    data: pokemon,
                    nextPage,
                    previousPage,
                    offset

                })
            })
        }


    }, [inputValue, offset, nextPage, previousPage])


    return [state, loading];
}
