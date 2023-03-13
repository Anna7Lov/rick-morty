import { GlobalAppState } from '../rootReducer';
import {
  CharacterCardModel,
  RequestState
} from '../../services/charactersTypes';

export const selectCharacters = (state: GlobalAppState): CharacterCardModel[] =>
  state.characters.characters;

export const selectAreCharactersLoading = (state: GlobalAppState): boolean =>
  state.characters.searchCharactersRequestState === RequestState.Waiting;

export const selectAreCharactersFailed = (state: GlobalAppState): string | null =>
  state.characters.error;
