import { InputBase, makeStyles } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { useFetchPokemon, useFetchSearchPokemon } from '../../hooks/useFetchPokemon';
import { SearchContext } from './SearchContext';

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))


export const PokemonSearch = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('')
  const { setSearchPokemon } = useContext(SearchContext)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
 

  return (
    <InputBase
      placeholder="Buscar Pokemon"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
      onChange={handleInputChange}
      value={inputValue}

    />
  )
}

