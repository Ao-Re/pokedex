import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';

import PokeDetails from './PokeDetails';
import Loader from './Loader';

const apiURL = 'https://pokeapi.co/api/v2/pokemon/';

const PokeInfo = () => {
    let { pokeID } = useParams();
    let [pokemon, setPokemon] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {        
        const fetchPokemon = async (pokeID) => {
            const response = await fetch(apiURL + pokeID + "/");
            const data = await response.json();
            const poke = {
                id: data.id,
                name: data.name,
                types: data.types,
                moves: data.moves
            }

            await setPokemon(poke);
            await setIsFetching(false);
        }
        
        fetchPokemon(pokeID);
    }, [])

    if(pokemon === [] || !pokemon) {
        return <Loader />;
    }

    if(pokeID > 898 || !isFinite(pokeID)) {
        return (
            <Jumbotron className={"position-fixed poke-info-cont"}>
                <h1 className="text-center align-center">No pokemon with that ID found</h1>
            </Jumbotron>
        )
    }

    return (
        <>
            {isFetching? <Loader /> : 
                (<Jumbotron className={"position-fixed poke-info-cont poke-" + pokemon.types[0].type.name + "-light pt-3"}>
                    <PokeDetails pokemon={pokemon} />
                </Jumbotron>
            )}
        </>
    );
}

export default PokeInfo;