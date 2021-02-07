import React from 'react';
import {
    Link,
    useRouteMatch
} from "react-router-dom";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PokeCell from './PokeCell';
import Loader from './Loader';

import chevronUp from '../assets/chevron-arrow-up.svg'

const PokeList = ({pokemons}) => {
    let { url } = useRouteMatch();
    
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    let listPokemon;
    if (pokemons) {
        pokemons.sort(function (a, b) {return a.id - b.id});
        listPokemon = pokemons.map( p => {
            return <>
                    <Col xs={6} md={3} className="my-3" key={p.id}>
                        <Link to={`${url}` + p.id} style={{textDecoration: 'none'}}> 
                            <PokeCell 
                                pokemon={p}
                            />
                        </Link>
                    </Col>
                </ >;
        });
    }

    if(!pokemons) return <Loader />

    return (
        <>
        <Jumbotron className="pokedex-cont">
            <h1 className="text-center font-weight-light mark">Pokemon List</h1>
            <Row>
                {listPokemon}
            </Row>
        </Jumbotron>
            <Button onClick={scrollToTop} className="scroll-btn shadow-none drop-shadow">
                <img src={chevronUp} alt='^' style={{'width': '2em'}} className="img-adjust" />
            </Button>
        </> 
    )
};

export default PokeList;