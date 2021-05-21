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

export const useFetchSearchPokemon = (inputValue = '') => {

    const [loading, setLoading] = useState(true)
    const [state, setState] = useState({
        data: [],

    })
    const [offset, setOffset] = useState(0);

    const nextPage = () => {
        setLoading(true)
        setOffset(offset + 20)
    }

    const previousPage = () => {
        setLoading(true)

        setOffset(offset - 20)


    }

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


    }, [inputValue, offset])


    return [state, loading];
}
