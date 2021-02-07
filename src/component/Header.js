import React, { useContext, useEffect, useState } from 'react';
import {
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Badge from 'react-bootstrap/Badge';

import PokeList from './PokeList';
import PokeInfo from './PokeInfo';
import MyPokemonList from './MyPokemonList';
import NotFound from './NotFound';
import { PokeContext } from './PokeContext';
import logo from '../assets/Pokeball.svg';
import bag from '../assets/Bag.svg';

const apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=12&offset=';

const Header = () => {
    const { capturedPokemons } = useContext(PokeContext);
    const [pokemon, setPokemon] = useState([]);
    const [nCaptured, setNCaptured] = useState(0);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [morePage, setMorePage] = useState (true);
    
    const fetchPokemons = async () => {
        let offset = (page-1) * 12;
        const response = await fetch(apiURL + offset);
        const data = await response.json();

        data.results.forEach ( function(poke) {
            if (!pokemon.includes(poke)) {
                fetchPokemon (poke);
            }
        })
        
        setIsFetching(false);
    };
    
    const fetchPokemon = async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        const poke = {
            id: data.id,
            name: data.name,
            types: data.types,
            moves: data.moves,
        }
        
        if (data.id > 898) {
            setMorePage(false);
            return
        }
        
        await setPokemon( temp => [... temp, poke]);
        
    }
    
    const infiniteScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop
        === (document.documentElement.offsetHeight) && morePage){

            console.log('infinite scroll called');
            setIsFetching(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll);

        setPage(2);
    
        fetchPokemons();

        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => window.removeEventListener('scroll', infiniteScroll);
    }, [])

    useEffect(() => {
        if (!isFetching) return;
        if(isFetching){
            let newPage = page;
            newPage++;
            setPage(newPage);

            // eslint-disable-next-line react-hooks/exhaustive-deps
            fetchPokemons();
        }
    }, [isFetching]);

    useEffect(() => {
        if (capturedPokemons || capturedPokemons.length > 0) {
            setNCaptured(capturedPokemons.length);
        }
    }, [capturedPokemons])

    return(
        <>
            <Navbar variant="dark-red drop-shadow-bold" sticky="top">
                <Link to="/pokedex/">
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip id="my-pokemon">
                                Open Pokedex
                            </Tooltip>
                        }
                    >
                        <Navbar.Brand>
                            <img 
                                alt=""
                                src={logo}
                                width="45"
                                height="45"
                                className="d-inline-block align-top drop-shadow"
                            />{''}
                            <h2 className="d-inline-block pl-2 navbar-item">Pokemon</h2>
                        </Navbar.Brand>
                    </OverlayTrigger>
                </Link>
                <Navbar.Collapse className="justify-content-end">
                    <Link to={`/my-pokemon`}>
                        <OverlayTrigger
                            placement="bottom"
                            overlay={
                                <Tooltip id="my-pokemon">
                                    Check My Pokemon
                                </Tooltip>
                            }
                        >
                            <Navbar.Brand>
                                <img 
                                    alt=""
                                    src={bag}
                                    width="50"
                                    height="50"
                                    className="drop-shadow"
                                />
                                <Badge variant="primary" className="align-top text-captured" pill><span className="align-middle">{nCaptured}</span></Badge>
                            </Navbar.Brand>
                        </OverlayTrigger>
                    </Link>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route exact path="/pokedex/">
                    <PokeList pokemons={pokemon} />
                </Route>
                <Route path={`/pokedex/:pokeID`}>
                    <PokeInfo />
                </Route>
                <Route path={`/my-pokemon`}>
                    <MyPokemonList />
                </Route>
                <Route render={() => <Redirect to={{pathname: "/not-found"}} />}>
                    <NotFound />
                </Route>
            </Switch>   
        </ >
    )
}

export default Header;