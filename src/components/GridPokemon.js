import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import { PokemonItem } from './PokemonItem'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridCard: {
        padding: "90px"
    }

}));
export const GridPokemon = () => {
    const classes = useStyles();


    const pokemosCard = useFetchPokemon();

    return (

        <>
            <div className={classes.root}>
                <Grid container spacing={5} >

                    {
                        pokemosCard.map(({ dataSimple, dataDetalle }) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <PokemonItem className={classes.paper}
                                    key={dataSimple.name + dataDetalle.id}
                                    {...dataDetalle}

                                />
                            </Grid>
                        ))
                    }


                </Grid>
            </div>

        </>


    )
}
