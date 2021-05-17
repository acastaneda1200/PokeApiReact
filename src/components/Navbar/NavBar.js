import React, { useContext, useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, Link } from '@material-ui/core';

import { useFetchSearchPokemon } from '../../hooks/useFetchPokemon';
import { SearchContext } from '../search/SearchContext';
//import SearchPokemon from './SearchPokemon';



const useStyles = makeStyles((theme) => ({
  spinner: {
    alignContent: "center"
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
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
}));

export const NavBar = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('')
  const { searchPokemon, setSearchPokemon } = useContext(SearchContext)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  
  const [{data}] = useFetchSearchPokemon(inputValue); 

  const handleSubmit = (e) => {
    e.preventDefault();
      setSearchPokemon(data );
}


  return (
    <div className={classes.grow}>
      <AppBar color={"secondary"} style={{ marginBottom: "15px" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link
              color='inherit'
              to="/"
            >
              PokeApi
            </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSubmit}>
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
            </form>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

          </div>

        </Toolbar>
      </AppBar>


    </div>
  );
}

export default NavBar;