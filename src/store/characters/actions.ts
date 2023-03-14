import { createAsyncAction } from 'typesafe-actions';
import {
  CharacterCardModel, CharacterItemModel
} from '../../services/charactersTypes';

export enum CharactersActions {
  GET_CHARACTERS_REQUEST = '@characters/GET_CHARACTERS_REQUEST',
  GET_CHARACTERS_SUCCESS = '@characters/GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_FAILURE = '@characters/GET_CHARACTERS_FAILURE',

  GET_CHARACTER_REQUEST = '@characters/GET_CHARACTER_REQUEST',
  GET_CHARACTER_SUCCESS = '@characters/GET_CHARACTER_SUCCESS',
  GET_CHARACTER_FAILURE = '@characters/GET_CHARACTER_FAILURE'
}

export const searchCharactersAsyncAction = createAsyncAction(
  CharactersActions.GET_CHARACTERS_REQUEST,
  CharactersActions.GET_CHARACTERS_SUCCESS,
  CharactersActions.GET_CHARACTERS_FAILURE
)<undefined, { characters: CharacterCardModel[] }, { error: string }>();

export const getCharacterAsyncAction = createAsyncAction(
  CharactersActions.GET_CHARACTER_REQUEST,
  CharactersActions.GET_CHARACTER_SUCCESS,
  CharactersActions.GET_CHARACTER_FAILURE
)<{ id: string }, { characterItem: CharacterItemModel }, { error: string }>();
