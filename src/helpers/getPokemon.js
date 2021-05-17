export const getPokemon = async (offset) => {
  const params = `?offset=${offset}&limit=20` // or:

    const urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${params}`);
    const { results } = await urlFetch.json();
    const dataPokemon = await Promise.all(
      results.map(async (pok) => {
        
        const { url } = pok
        const urlFetch = await fetch(url);
        const dataPorPokemon = await urlFetch.json();

        //return pok
        return {
          namePokemon: pok.name,
          dataDetalle: dataPorPokemon,
        }

      })

    )
  
 
    return dataPokemon;

  }

  export const searchApi = async (inputValue) => {
    const urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`);
    const { results } = await urlFetch.json();

    const searchPokemon = results.filter(({ name }) => {
      return  name.toLowerCase().includes(inputValue.toLowerCase()) 
    
      
    })

    

    const dataPokemon = await Promise.all(
      searchPokemon.map(async (pok) => {

        const { url } = pok
        const urlFetch = await fetch(url);
        const dataPorPokemon = await urlFetch.json();

        //return pok
        return {
          namePokemon: pok.name,
          dataDetalle: dataPorPokemon,
        }

      })

    )
  
  
    return dataPokemon;
  }

