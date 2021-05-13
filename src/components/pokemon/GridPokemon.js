import { CircularProgress, Container, Grid, makeStyles, Typography } from '@material-ui/core';
//import Pagination from '@material-ui/lab/Pagination';
import React, { useContext, useMemo } from 'react'
import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import { SearchContext } from '../search/SearchContext';
import { PokemonItem } from './PokemonItem'

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

    const { data, loading } = useFetchPokemon();
    const { searchPokemon } = useContext(SearchContext)
   
 
 
    return (
        <>

            <Container fixed>
                {
                    loading &&
                    <CircularProgress size={100}
                        left={-20}
                        top={10}

                        style={{ marginLeft: '50%' }}
                        color="secondary" />
                }
                <div className={classes.root}>

                    <Grid container spacing={5} >

                        {
                           
                           searchPokemon.map(({ namePokemon, dataDetalle }) => (
                                    <Grid key={namePokemon} item xs={12} sm={6} md={4}>
                                        <PokemonItem
                                            key={namePokemon}
                                            {...dataDetalle}

                                        />
                                    </Grid>

                                ))
                             

                            // <Typography align='center' variant="h5" component="h4">
                            //     No se encontraron resultados
                            //             </Typography>





                        }


                    </Grid>
                </div>

            </Container>
        </>

    )



}
