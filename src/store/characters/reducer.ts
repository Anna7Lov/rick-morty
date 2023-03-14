import { getType } from 'typesafe-actions';
import { GlobalAppActions } from '../actions';
import {
  getCharacterAsyncAction,
  searchCharactersAsyncAction
} from './actions';
import {
  CharacterCardModel,
  CharacterItemModel,
  RequestState
} from '../../services/charactersTypes';

export interface CharactersState {
  characters: CharacterCardModel[];
  searchCharactersRequestState: RequestState;
  error: string | null;
  characterItem: CharacterItemModel | null;
  characterItemRequestState: RequestState;
  characterItemError: string | null;
}

const initialState: CharactersState = {
  characters: [],
  searchCharactersRequestState: RequestState.Unset,
  error: null,
  characterItem: null,
  characterItemRequestState: RequestState.Unset,
  characterItemError: null
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

    case getType(getCharacterAsyncAction.request): {
      return {
        ...state,
        characterItemRequestState: RequestState.Waiting,
        characterItemError: null
      };
    }

    case getType(getCharacterAsyncAction.success): {
      return {
        ...state,
        characterItem: action.payload.characterItem,
        characterItemRequestState: RequestState.Success,
        characterItemError: null
      };
    }

    case getType(getCharacterAsyncAction.failure): {
      return {
        ...state,
        characterItemRequestState: RequestState.Failure,
        characterItemError: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
};
