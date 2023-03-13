import { createAsyncAction } from 'typesafe-actions';
import {
  CharacterCardModel
} from '../../services/charactersTypes';

export enum CharactersActions {
  GET_CHARACTERS_REQUEST = '@characters/GET_CHARACTERS_REQUEST',
  GET_CHARACTERS_SUCCESS = '@characters/GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_FAILURE = '@characters/GET_CHARACTERS_FAILURE',
}

export const searchCharactersAsyncAction = createAsyncAction(
  CharactersActions.GET_CHARACTERS_REQUEST,
  CharactersActions.GET_CHARACTERS_SUCCESS,
  CharactersActions.GET_CHARACTERS_FAILURE
)<undefined, { characters: CharacterCardModel[] }, { error: string }>();
