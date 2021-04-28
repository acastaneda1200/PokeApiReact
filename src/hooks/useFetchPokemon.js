import { useEffect, useState } from 'react'

export const useFetchPokemon = () => {
  const [readyForRender, setReadyForRender] = useState(false);
  const [pokemon, setPokemon] = useState([{
    dataSimple: [],
    dataDetalle: [],

  }])

  useEffect(() => {

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
    getPokemon();
  }, [])


  return [pokemon, readyForRender];
  // console.log(pokemon);
}
