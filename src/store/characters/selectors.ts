import { GlobalAppState } from '../rootReducer';
import {
  CharacterCardModel,
  CharacterItemModel,
  RequestState
} from '../../services/charactersTypes';

export const selectCharacters = (state: GlobalAppState): CharacterCardModel[] =>
  state.characters.characters;

export const selectAreCharactersLoading = (state: GlobalAppState): boolean =>
  state.characters.searchCharactersRequestState === RequestState.Waiting;

export const selectAreCharactersFailed = (state: GlobalAppState): string | null =>
  state.characters.error;

export const selectCharacter = (state: GlobalAppState): CharacterItemModel | null =>
  state.characters.characterItem;

export const selectIsCharacterLoading = (state: GlobalAppState): boolean =>
  state.characters.characterItemRequestState === RequestState.Waiting;

export const selectIsCharacterFailed = (state: GlobalAppState): string | null =>
  state.characters.characterItemError;
