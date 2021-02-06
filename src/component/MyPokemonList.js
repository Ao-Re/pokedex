import React, {useContext} from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import {PokeContext} from './PokeContext';
import MyPokemon from './MyPokemon';

const MyPokemonList = () => {
    const { capturedPokemons } = useContext(PokeContext);

    let myPokeList;
    if (!capturedPokemons || capturedPokemons.length === 0) {
        return (
            <Jumbotron className="position-fixed my-poke-container py-5">
                <h1 className="text-center">No pokemon caught!</h1>
            </Jumbotron>     
        );
    } else {
        myPokeList = capturedPokemons.map(poke => {
            return <>
                <Card className="my-5">
                    <Card.Body>
                        <MyPokemon pokemon = {poke} />
                    </Card.Body>
                </Card>
            </>
        })
    }

    if (!myPokeList) {
        return null;
    }

    return (
        <Jumbotron className="position-fixed my-poke-container py-5">
            <h1 className="sticky-top text-center text-adjust display-2 mark">My Pokemon</h1>
            <Container className="my-poke-list">
                {myPokeList}
            </Container>
        </Jumbotron>
    )
}

export default MyPokemonList;