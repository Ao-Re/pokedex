import React from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PokeCell = ({pokemon}) => {
    let pokeID = '#' + ((String(pokemon.id).length === 3)? pokemon.id : ((String(pokemon.id).length === 2)? '0' + pokemon.id : '00' + pokemon.id));
    
    return(
        <>
            <Card className={"poke-cell poke-" + pokemon.types[0].type.name + "-light"}>
                <Card.Header>
                    <Card.Subtitle className="text-adjust">{pokeID}</Card.Subtitle>
                    <Card.Title className="text-center text-uppercase text-adjust">{pokemon.name}</Card.Title>
                </Card.Header>
                <Card.Img 
                    className="img-adjust" 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
                    alt={pokemon.name}
                />
                <Card.Footer>
                    <Row>
                        {pokemon.types.map((type) => 
                            <Col className="text-center col-adjust" >
                                <div className={"text-adjust align-middle poke-type poke-" + type.type.name}>{type.type.name}</div>
                            </Col>
                        )}
                    </Row>
                </Card.Footer>
            </Card>
        </>
    )
}

export default PokeCell;