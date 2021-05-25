import {  CircularProgress, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react'
import { useFetchSearchPokemon } from '../../hooks/useFetchPokemon';
import { SearchContext } from '../search/SearchContext';
import { PokemonItem } from '../pokemon/PokemonItem'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridCard: {
        padding: "90px"
    },
    pagination: {
        "& > *": {
            marginTop: theme.spacing(2),
            justifyContent: "center",
            display: 'flex',
            marginBottom: '1rem'
        }
    }

}));
export const SearchPokemonResult = () => {

    const classes = useStyles();

    // const [ state, loading, nextPage, previousPage ] = useFetchSearchPokemon();
    const [ , loading] = useFetchSearchPokemon();
    const  { searchPokemon } = useContext(SearchContext)
        console.log(searchPokemon);

    if (loading) {
        return (
            loading &&
            <CircularProgress size={100}
                left={-20}
                top={10}

                style={{ marginLeft: '50%' }}
                color="secondary" />


        )
    }

    return (
        <>

            <Container fixed>

                <div className={classes.root}>
                    <Grid container spacing={5} >
                        {
                            searchPokemon.map(({ namePokemon, dataDetalle }) => (
                                <Grid key={namePokemon} item xs={12} sm={6} md={4}>
                                    <PokemonItem
                                        {...dataDetalle}
                                    />
                                </Grid>

                            ))
                        }
                    </Grid>
                </div>
                {
                        (searchPokemon.length === 0) &&
                        <Typography style={{ margin: '2rem' }} align='center' variant="h5" component="h4">
                            No se encontraron resultados
                        </Typography>
                    }

            </Container>

        </>

    )



}
