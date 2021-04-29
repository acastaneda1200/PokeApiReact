import { useEffect, useState } from 'react'

export const useFetchPokemon = () => {
  const [inputValue, setInputValue] = useState('');
  const [readyForRender, setReadyForRender] = useState(false);
  const [pokemon, setPokemon] = useState([{
    dataSimple: [],
    dataDetalle: [],
  
  }])

  const SearchPokemon = (e) => {
    setInputValue(e.target.value);
  }


 

  useEffect(() => {

    getPokemon();

  }, [])

  useEffect(() => {
    if (inputValue.trim().length < 2) {
      getPokemon();
    }
  }, [inputValue])

  useEffect(() => {
    if (inputValue.trim().length >= 2) {

      const searchApi = async () => {
        const url = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=150&offset=0`);
        const { results } = await url.json();
  
        const searchPokemon = results.filter(({ name }) => {
          return name.toLowerCase().includes(inputValue.toLowerCase())
        })
  
        const dataPokemon = await Promise.all(
          searchPokemon.map(async (pok) => {
  
            const { url } = pok
            const urlFetch = await fetch(url);
            const dataPorPokemon = await urlFetch.json();
  
            //return pok
            return {
              dataSimple: pok,
              dataDetalle: dataPorPokemon,
            }
  
          })
  
        )
     
        setPokemon(dataPokemon)
      }
      searchApi()
    }
   
  }, [inputValue])

  const getPokemon = async () => {
    const urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`);
    const { results } = await urlFetch.json();
    const dataPokemon = await Promise.all(
      results.map(async (pok) => {

        const { url } = pok
        const urlFetch = await fetch(url);
        const dataPorPokemon = await urlFetch.json();

        //return pok
        return {
          dataSimple: pok,
          dataDetalle: dataPorPokemon,
        }

      })

    )
    setPokemon(dataPokemon)
    setReadyForRender(true)
    // console.log(dataPokemon);

  }




  return [pokemon, readyForRender, SearchPokemon,  inputValue];
  // console.log(pokemon);
}
