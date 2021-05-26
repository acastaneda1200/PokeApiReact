import React from 'react'
import { Button, Card, CardActionArea, CardContent, CardMedia, Chip, CircularProgress, Container, makeStyles, StylesProvider, Typography } from '@material-ui/core';
import './chipStyle.css'
import { useParams } from 'react-router';
import { useFetchPokemonByName } from '../../hooks/useFetchPokemon';



const useStyles = makeStyles((theme) => ({
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
    card_stats: {
        display: 'grid',
        placeItems: 'center',

    }
}));

export const PokemonDetail = () => {
    const { name } = useParams();

    const { data: dataDetalle, loading } = useFetchPokemonByName(name)


    const classes = useStyles();

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


    const imagen = dataDetalle.sprites.other["official-artwork"].front_default

    /* let habilidad = dataDetalle.abilities[0].ability.name;
    let habilidadHidden = dataDetalle.abilities[1].ability.name; */
    let HP = dataDetalle.stats[0].base_stat;
    let attack = dataDetalle.stats[1].base_stat;
    let defense = dataDetalle.stats[2].base_stat;
    let special_attack = dataDetalle.stats[3].base_stat;
    let special_defense = dataDetalle.stats[4].base_stat;
    let speed = dataDetalle.stats[5].base_stat;



    return (
        <>

            <Container align='center'>

                <Button  variant="contained" style={{marginBottom: '2rem'}} color="default">
                    Volver
                </Button>
                <Card className={classes.root}>
                    <CardActionArea >


                        <CardMedia
                            className={classes.media}
                            image={imagen}
                            title={dataDetalle.name}

                        />

                        {/* <LoaderComponent /> */}

                        <CardContent >
                            <StylesProvider injectFirst>
                                <div className="cards_type_detail">
                                    {
                                        dataDetalle.types.map(({ type }, i) => (

                                            <Chip key={i} align="center" className={`t_${type.name} text-white`} label={type.name} />

                                        ))
                                    }
                                </div>
                            </StylesProvider>

                            <Typography gutterBottom align="center" variant="h5" component="h2">
                                {dataDetalle.name}
                            </Typography>
                            <div >
                                <table className={classes.card_stats}>
                                    <tbody><tr>
                                        <th>HP</th>
                                        <td>{HP}</td>
                                    </tr>
                                        <tr>
                                            <th>Attack</th>
                                            <td>{attack}</td>
                                        </tr>

                                        <tr>
                                            <th>Defense</th>
                                            <td>{defense}</td>
                                        </tr>

                                        <tr>
                                            <th>Special Attack</th>
                                            <td>{special_attack}</td>
                                        </tr>
                                        <tr>
                                            <th>Special Defense</th>
                                            <td>{special_defense}</td>
                                        </tr>
                                        <tr>
                                            <th>Speed</th>
                                            <td>{speed}</td>
                                        </tr>
                                    </tbody></table>
                            </div>

                        </CardContent>
                    </CardActionArea>
                </Card>

            </Container>

        </>
    )
}
