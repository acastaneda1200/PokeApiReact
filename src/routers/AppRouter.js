import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from "react-router-dom";
import { PokemonSearch } from '../components/PokemonSearch';
import { PokeApi } from '../PokeApi';



export const AppRouter = () => {
    return (
        <Router>
          
               {/*  <Navbar /> */}

                <Switch>
                   <Route exact path="/pokemon/:name" component={PokemonSearch}></Route>
                   <Route path="/" component={PokeApi}></Route>

                   <Redirect to="/"/>
                </Switch>
           
        </Router>
    )
}
