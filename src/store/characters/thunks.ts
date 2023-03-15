import {
  getCharacterAsyncAction,
  searchCharactersAsyncAction
} from './actions';
import {
  getCharacter,
  searchCharacters
} from '../../services/charactersApi';
import { AppDispatch } from '../index';
import { ThunkAction } from 'redux-thunk';
import { GlobalAppState } from '../rootReducer';
import { GlobalAppActions } from '../actions';

export type ThunkAppType = ThunkAction<Promise<void>, GlobalAppState, undefined, GlobalAppActions>;

export const searchCharactersThunk = (
  query: string
): ThunkAppType => async (dispatch: AppDispatch) => {
  dispatch(searchCharactersAsyncAction.request());
  try {
    const r = await searchCharacters(query);
    if (!r.success || !r.response) {
      throw new Error(r.error?.message);
    }
    dispatch(searchCharactersAsyncAction.success({ characters: r.response.results }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(searchCharactersAsyncAction.failure({ error: error.message }));
    }
  }
};

export const getCharacterThunk = (id: string): ThunkAppType => async (dispatch: AppDispatch) => {
  dispatch(getCharacterAsyncAction.request({ id }));
  try {
    const r = await getCharacter(id);
    if (!r.success || !r.response) {
      throw (Error('Something went wrong'));
    }
    dispatch(getCharacterAsyncAction.success({ characterItem: r.response }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(getCharacterAsyncAction.failure({ error: error.message }));
    }
  }
};
