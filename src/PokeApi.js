import { Container } from '@material-ui/core';
import React from 'react'
import { GridPokemon } from './components/GridPokemon'


export const PokeApi = () => {
  return (
    <>
      <Container fixed>

        <GridPokemon />
      </Container>
    </>
  );
}


