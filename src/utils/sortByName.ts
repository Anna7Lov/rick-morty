import { CharacterCardModel } from '../services/types';

export const sortByName = (list: CharacterCardModel[]): CharacterCardModel[] => {
  return [...list].sort((a, b) => a.name > b.name ? 1 : -1);
};
