//import { Container } from '@material-ui/core';
import React from 'react'
//import { GridPokemon } from './components/GridPokemon'
import { NavBar } from './components/NavBar'

import Pagination from '@material-ui/lab/Pagination';



export const PokeApi = () => {
  return (
    <>
      <NavBar />
      <Pagination count={10} color="primary" />
    </>
  );
}


