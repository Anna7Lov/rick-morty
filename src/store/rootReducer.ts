import { combineReducers } from 'redux';
import { reducer as charactersReducer, CharactersState } from './characters/reducer';
import { reducer as userReducer, UserState } from './user/reducer';

export interface GlobalAppState {
  characters: CharactersState;
  user: UserState;
}

export const rootReducer = combineReducers<GlobalAppState>({
  characters: charactersReducer,
  user: userReducer
});
