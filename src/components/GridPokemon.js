import { Grid, makeStyles, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import React from 'react'
//import { useFetchPokemon } from '../hooks/useFetchPokemon';
//import NavBar from './NavBar';
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
          justifyContent:"center",
          display:'flex',
          marginBottom: '1rem'
        }
      }

}));
export const GridPokemon = ({ pokemosCard, ready }) => {
    const classes = useStyles();
    if (ready) {
        return (
            <>
                {
                    (pokemosCard.length !== 0) ?
                        <div className={classes.root}>

                            <Pagination size='large' className={classes.pagination} count={10} color="primary" />
                            <Grid container spacing={5} >

                                {

                                    pokemosCard.map(({ dataSimple, dataDetalle }) => (
                                        <Grid key={dataSimple.name + dataDetalle.id} item xs={12} sm={6} md={4}>
                                            <PokemonItem
                                                key={dataSimple.name + dataDetalle.id}
                                                {...dataDetalle}

                                            />
                                        </Grid>

                                    ))

                                }


                            </Grid>
                        </div>
                        :
                        <Typography align='center' variant="h5" component="h4">
                        No se encontraron resultados
                        </Typography>
                }
            </>

        )
    } else {
        return null;
    }


}
