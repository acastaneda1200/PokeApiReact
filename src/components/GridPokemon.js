import { Grid, makeStyles } from '@material-ui/core';
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
    }

}));
export const GridPokemon = ({pokemosCard, ready}) => {
    const classes = useStyles();
   
    if (ready) {
        return (

            <>
                <div className={classes.root}>
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

            </>


        )
    }else{
        return null;
    }


}
