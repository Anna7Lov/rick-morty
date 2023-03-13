import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCharacters,
  selectAreCharactersLoading,
  selectAreCharactersFailed
} from '../../store/characters/selectors';
import { sortByName } from '../../utils/sortByName';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import { Loading } from '../Loading/Loading';
import './CharactersList.css';

export const CharactersList = (): JSX.Element => {
  const characters = useSelector(selectCharacters);
  const isLoading = useSelector(selectAreCharactersLoading);
  const error = useSelector(selectAreCharactersFailed);

  const sortedCharacters = useMemo(() => {
    if (!characters.length) {
      return null;
    }
    return sortByName(characters);
  }, [characters]);

  return (
    <div className="characters-list">
      {isLoading
        ? (<Loading />)
        : !isLoading && !error
            ? (<div className="characters-list__items">
            {sortedCharacters?.map((character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
            </div>)
            : (<div className="characters-list__error">{error}</div>)}
    </div>
  );
};
