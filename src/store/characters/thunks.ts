import {
  searchCharactersAsyncAction
} from './actions';
import {
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
      throw Error('Something went wrong');
    }
    dispatch(searchCharactersAsyncAction.success({ characters: r.response.results }));
  } catch (error) {
    if (error instanceof Error) {
      dispatch(searchCharactersAsyncAction.failure({ error: error.message }));
    }
  }
};
