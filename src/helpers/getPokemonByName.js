export const getPokemonByName = async (name) => {

    const urlFetch = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    const results = await urlFetch.json();

    return results;
}