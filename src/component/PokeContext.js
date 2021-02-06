import React, { createContext } from 'react';

import { usePokeReducer } from './usePokeReducer';
import { CAPTURE, RELEASE } from './actions';

const PokeContext = createContext();

const PokeProvider = (props) => {
    const [state, dispatch] = usePokeReducer();

    const { capturedPokemons } = state;

    const capture = (pokemon) => dispatch({ type: CAPTURE, pokemon });
    const release = (pokemon) => dispatch({ type: RELEASE, pokemon });

    const providerVal = {
        capturedPokemons,
        capture,
        release,
    };

    return (
        <PokeContext.Provider value={providerVal}>
          {props.children}
        </PokeContext.Provider>
    )
}

export { PokeContext, PokeProvider };