import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,

} from "react-router-dom";

import { NavBar } from '../components/Navbar/NavBar'
import { SearchContext } from '../components/search/SearchContext';
import { GridPokemon } from '../components/pokemon/GridPokemon';



export const AppRouter = () => {

   
    const [searchPokemon, setSearchPokemon] = useState([])
    
    return (
        <Router>
           <SearchContext.Provider value={{searchPokemon, setSearchPokemon}}>
                 <NavBar />

                <Switch>
                   {/* <Route exact path="/pokemon/:name"></Route> */}
                   <Route path="/" component={GridPokemon}></Route>

                   <Redirect to="/"/>
                </Switch>
                </SearchContext.Provider>
        </Router>
    )
}
