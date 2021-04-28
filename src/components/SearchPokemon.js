import { useState } from "react";

export const SearchPokemon = () => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
           
            setInputValue(e.target.value);
    }

    return inputValue;
    
}

export default SearchPokemon;
