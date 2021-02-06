import createPersistedReducer from 'use-persisted-reducer';

import { CAPTURE, RELEASE} from './actions';

const usePersistedReducer = createPersistedReducer('state');

const getCapturedPokemons = (capturedPokemons, releasedPokemon) => {
    console.log('filtering pokemon');
    return capturedPokemons.filter(pokemon => pokemon !== releasedPokemon);
}

const releasePokemon = (releasedPokemon, state) => ({
    capturedPokemons: getCapturedPokemons(state.capturedPokemons, releasedPokemon)
});

const catchPokemon = (pokemon, state) => ({
    capturedPokemons: [...state.capturedPokemons, pokemon]
});

const pokeReducer = (state, action) => {
    switch (action.type) {
        case CAPTURE:
            return catchPokemon(action.pokemon, state);
        case RELEASE:
            console.log('releasing' + action.pokemon.nick);
            return releasePokemon(action.pokemon, state);
        default:
            return state;
    }
}

export const usePokeReducer = () =>
    usePersistedReducer(pokeReducer, {
        capturedPokemons: [],
    });