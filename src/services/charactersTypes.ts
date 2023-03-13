export interface CharacterCardModel {
  id: number;
  image: string;
  name: string;
  species: string;
}

export interface CharactersSearchResponseType {
  results: CharacterCardModel[];
}

export enum RequestState {
  Unset = 'Unset',
  Waiting = 'Waiting',
  Success = 'Success',
  Failure = 'Failure'
}
