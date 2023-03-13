import { getType } from 'typesafe-actions';
import { GlobalAppActions } from '../actions';
import {
  searchCharactersAsyncAction
} from './actions';
import {
  CharacterCardModel,
  RequestState
} from '../../services/charactersTypes';

export interface CharactersState {
  characters: CharacterCardModel[];
  searchCharactersRequestState: RequestState;
  error: string | null;
}

const initialState: CharactersState = {
  characters: [],
  searchCharactersRequestState: RequestState.Unset,
  error: null
};

export const reducer = (state = initialState, action: GlobalAppActions): CharactersState => {
  switch (action.type) {
    case getType(searchCharactersAsyncAction.request): {
      return {
        ...state,
        searchCharactersRequestState: RequestState.Waiting,
        error: null
      };
    }

    case getType(searchCharactersAsyncAction.success): {
      return {
        ...state,
        characters: action.payload.characters,
        searchCharactersRequestState: RequestState.Success,
        error: null
      };
    }

    case getType(searchCharactersAsyncAction.failure): {
      return {
        ...state,
        searchCharactersRequestState: RequestState.Failure,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
};
