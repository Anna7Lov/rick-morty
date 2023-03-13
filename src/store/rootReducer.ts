import { combineReducers } from 'redux';
import { reducer as charactersReducer, CharactersState } from './characters/reducer';

export interface GlobalAppState {
  characters: CharactersState;
}

export const rootReducer = combineReducers<GlobalAppState>({
  characters: charactersReducer
});
