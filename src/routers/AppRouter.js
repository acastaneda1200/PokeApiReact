import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from "react-router-dom";
import { PokemonSearch } from '../components/PokemonSearch';
import { PokeApi } from '../PokeApi';
import { NavBar } from '../components/NavBar'



export const AppRouter = () => {
    return (
        <Router>
          
                {/* <NavBar /> */}

                <Switch>
                   <Route exact path="/pokemon/:name" component={PokemonSearch}></Route>
                   <Route path="/" component={NavBar}></Route>

                   <Redirect to="/"/>
                </Switch>
           
        </Router>
    )
}
