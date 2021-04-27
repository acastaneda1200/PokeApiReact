
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
//import { fetchPokemon } from '../helpers/getPokemon'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "55%",
    height: 180
    
  },
});

export const PokemonItem = (dataDetalle) => {
  const classes = useStyles();



   const imagen = dataDetalle.sprites?.other["official-artwork"].front_default

  return (
     
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imagen}
          title={dataDetalle.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {dataDetalle.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
   
  )
}
