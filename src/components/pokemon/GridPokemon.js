import { Button, CircularProgress, Container, Grid, makeStyles } from '@material-ui/core';
//import Pagination from '@material-ui/lab/Pagination';
import React, { useContext } from 'react'
import { useFetchSearchPokemon } from '../../hooks/useFetchPokemon';
import { SearchContext } from '../search/SearchContext';
import { ValueContext } from '../search/ValueContext';
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
export const GridPokemon = ({history}) => {

    const classes = useStyles();
    const [pokemones, loading] = useFetchSearchPokemon();
    const { searchPokemon } = useContext(SearchContext)
    const { valueState } = useContext(ValueContext)
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
   
     if (searchPokemon.length > 0 || valueState.length > 0 ) {
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
                                    <PokemonItem history={history} 
                                        {...dataDetalle}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </Container>

        </>

    )



}
