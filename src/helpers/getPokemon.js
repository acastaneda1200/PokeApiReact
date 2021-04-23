export const getPokemon = async (pokemonId) => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const allPokemon = await res.json();
  
    
    return allPokemon;
    
    
  }
  
  export const fetchPokemon = async () => {
  
    for (let i = 1; i < 10; i++) {
       await getPokemon(i)
    
    }
  
  }
  fetchPokemon();