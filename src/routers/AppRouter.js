import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from "react-router-dom";

import { NavBar } from '../components/Navbar/NavBar'
import { SearchContext } from '../components/search/SearchContext';
import { ValueContext } from '../components/search/ValueContext';
import { GridPokemon } from '../components/pokemon/GridPokemon';
import { PokemonDetail } from '../components/pokemon/PokemonDetail';



export const AppRouter = () => {

   
    const [searchPokemon, setSearchPokemon] = useState([])
    const [valueState, setValueState] = useState('')
    
    return (
        <Router>
           <SearchContext.Provider value={{searchPokemon, setSearchPokemon}}>
           <ValueContext.Provider value={{valueState, setValueState}}>
                 <NavBar />

                <Switch>
                   <Route exact path="/pokemon/:name" component={PokemonDetail}></Route>
                   <Route path="/" component={GridPokemon}></Route>

                   <Redirect to="/"/>
                </Switch>
                </ValueContext.Provider>
                </SearchContext.Provider>
        </Router>
    )
}
