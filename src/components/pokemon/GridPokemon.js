import { Button, CircularProgress, Container, Grid, makeStyles } from '@material-ui/core';
//import Pagination from '@material-ui/lab/Pagination';
import React, { useContext } from 'react'
import { useFetchSearchPokemon } from '../../hooks/useFetchPokemon';
import { SearchContext } from '../search/SearchContext';
import { PokemonItem } from './PokemonItem'
import { SearchPokemonResult } from '../search/SearchPokemonResult'

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
export const GridPokemon = () => {

    const classes = useStyles();

    // const [ state, loading, nextPage, previousPage ] = useFetchSearchPokemon();
    const [pokemones, loading] = useFetchSearchPokemon();
    const { searchPokemon } = useContext(SearchContext)
    const { data, nextPage, previousPage, offset } = pokemones;
    
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
    
     if (searchPokemon.length > 0 ) {
         return (

             <SearchPokemonResult />
         )
     }

    return (
        <>
            <Container fixed>
                <Container align='center'>
                    <Button disabled={(offset === 0 ? true : false )} onClick={previousPage} style={{ margin: '1rem' }} variant="contained" color="default">
                        Atras
                        </Button>
                    <Button onClick={nextPage} variant="contained" color="secondary">
                        Siguiente
                        </Button>
                </Container>

                <div className={classes.root}>
                    <Grid container spacing={5} >
                        {
                            data.map(({ namePokemon, dataDetalle }) => (
                                <Grid key={namePokemon} item xs={12} sm={6} md={4}>
                                    <PokemonItem

                                        {...dataDetalle}

                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>


                {/* {
                        (searchPokemon.length === 0) &&
                        <Typography style={{ margin: '2rem' }} align='center' variant="h5" component="h4">
                            No se encontraron resultados
                        </Typography>
                    } */}

            </Container>

        </>

    )



}
