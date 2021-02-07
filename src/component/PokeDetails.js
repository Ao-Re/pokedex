import React, { useState, useContext } from 'react';

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import { PokeContext } from './PokeContext';

const PokeDetails = ({pokemon}) => {
    let types = pokemon.types;
    let moves = pokemon.moves;
    let pokeID = '#' + ((String(pokemon.id).length === 3)? pokemon.id : ((String(pokemon.id).length === 2)? '0' + pokemon.id : '00' + pokemon.id));
    
    const [showSuccess, setShowSuccess] = useState(false);
    const handleCloseSuccess = () => setShowSuccess(false);
    const showModalSuccess = () => {
        setNick("");
        setErrorMessage("");
        setShowSuccess(true);
    }

    const [showFailed, setShowFailed] = useState(false);
    const handleCloseFailed = () => setShowFailed(false);
    const showModalFailed = () => setShowFailed(true);

    const catchPokemon = () => {
        let coin = Math.random();
        if (coin < 0.51) {
            showModalSuccess();
        } else {
            showModalFailed();
        }
    }

    const [nick, setNick] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { capture,  capturedPokemons } = useContext(PokeContext);

    const handleConfirm = (e) => {
        const p = {
            id: pokemon.id + '-' + nick,
            nick: nick,
            name: pokemon.name,
            pid: pokemon.id,
            types: pokemon.types
        };
        
        if (capturedPokemons) {
            if (capturedPokemons.some(el => el.nick === p.nick)) {
                setErrorMessage("*A " + pokemon.name + " called [" + p.nick + "] exists, please enter another name");
                setNick("");
                return
            } else if (!p.nick) {
                setErrorMessage("*Please enter a name");
                setNick("");
                return
            } else if (p.nick.length > 10) {
                setErrorMessage("*Please input a nickname under 10 characters")
                setNick("");
                return;
            }
        }

        setNick("");
        setShowSuccess(false);
        capture(p);
        setErrorMessage("");
        e.preventDefault();
    }

    const handleEnter = (e) => {
        console.log("key handler")
        if (e.key === "Enter") {
            setNick(e.target.value);
            handleConfirm();
            e.preventDefault();
        }
    }

    return (
        <>
            <Row className={"media-adjust"}>
                <Col xs={12} sm={5}>
                    <Container className="poke-info sticky-top">
                        <h4 className="text-adjust mark">{pokeID}</h4>
                        <h2 className="text-adjust text-center text-uppercase font-weight-bold">{pokemon.name}</h2>
                        <Row>
                            {types? types.map((t => <Col className="text-center"><h4 className={"text-adjust poke-type align-middle poke-" + t.type.name}>{t.type.name}</h4></Col>)) : null }
                        </Row>
                        <img className="mx-auto d-block img-adjust" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
                        <Button className={"mx-auto d-block catch-button poke-" + types[0].type.name + "-dark shadow-none text-adjust"} size="lg" onClick={catchPokemon} >Catch the Pokemon!</Button>
                    </Container>
                </Col>
                <Col xs={12} sm={7}>
                    <h1 className="sticky-top text-adjust">Moves</h1>
                    <Container className={"moves-list poke-" + types[0].type.name}>
                        <CardColumns className={"card-column-style"}>
                            {moves? (moves.map((m => <Card className={"card-style poke-" + types[0].type.name + "-light"}> <Card.Body className="text-capitalize text-adjust font-weight-bold py-2"> {(m.move.name).replace('-', ' ')} </Card.Body> </Card>))): null}
                        </CardColumns>
                    </Container>
                </Col>
            </Row>

            <Modal
                show = {showSuccess}
                onHide = {handleCloseSuccess}
                backdrop = "static"
                keyboard = {false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>POKEMON CAUGHT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className="text-center">You caught a {pokemon.name}!</h2>
                    <Form onSubmit={handleConfirm} >
                        <Form.Control 
                            type="text" 
                            placeholder="Enter nickname" 
                            className="mr-sm-2" 
                            value={nick} 
                            onChange={e => setNick(e.target.value)}
                            onKeyPress={handleEnter}
                        />
                        <Form.Text className="text-danger text-smaller">{errorMessage}</Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSuccess}>
                        Release
                    </Button>
                    <Button variant="success" onClick={handleConfirm}>Confirm</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showFailed} onHide = {handleCloseFailed} centered>
                <Modal.Header closeButton>
                    <Modal.Title>POKEMON NOT CAUGHT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 className="text-center">Try again next time</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFailed}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PokeDetails;