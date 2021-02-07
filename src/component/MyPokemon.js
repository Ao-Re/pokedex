import React, { useContext, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { PokeContext } from './PokeContext';

const MyPokemon = ({pokemon}) => {
    let types = pokemon.types;
    const { release } = useContext(PokeContext);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const showModal = () => setShow(true);

    const releasePokemon = () => {
        release(pokemon);
        handleClose();
    }

    return <>
        <Row>
            <Col xs={12} sm={2}>
            <img className="mx-auto d-block my-poke-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pid}.png`} alt={pokemon.name} />
            </Col>
            <Col xs={9} sm={8}>
                <Row>
                    <h3 className="text-adjust font-weight-bold">{pokemon.nick}</h3>
                </Row>
                <Row>
                    <div className="text-adjust font-italic">{pokemon.name}</div>
                </Row>
                <Row className="mt-2">
                {types? types.map((t => <Col xs={4} sm={2} className="text-center"><div className={"text-adjust text-capitalize poke-type float-left poke-" + t.type.name}>{t.type.name}</div></Col>)) : null }
                    <Col xs />
                </Row>
            </Col>
            <Col xs={3} sm={2} className="bt-release-cont">
                <Button className="float-right bt-release" variant="danger" onClick={showModal}> 
                    <span aria-hidden="true" className="font-weight-bolder">X</span>
                </Button>
            </Col>
        </Row>

        <Modal
            show = {show}
            onHide = {handleClose}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>POKEMON CAUGHT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2 className="text-center">Do you want to release [{pokemon.nick}]?</h2>
                <img className="mx-auto d-block img-adjust" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pid}.png`} alt={pokemon.name} />
            </Modal.Body>
            <Modal.Footer>
                <Row style={{'width' : '100%'}}>
                    <Col xs={6} className="text-center">
                        <Button variant="secondary" onClick={handleClose} block>
                            Don't Release
                        </Button>
                    </Col>
                    <Col xs={6} className="text-center">
                        <Button variant="danger" onClick={releasePokemon} block>Release</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    </>
}

export default MyPokemon;