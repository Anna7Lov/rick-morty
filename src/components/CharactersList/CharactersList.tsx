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
import { Error } from '../Error/Error';
import './CharactersList.css';

export const CharactersList = (): JSX.Element => {
  const characters = useSelector(selectCharacters);
  const isListLoading = useSelector(selectAreCharactersLoading);
  const error = useSelector(selectAreCharactersFailed);

  const sortedCharacters = useMemo(() => {
    if (!characters.length) {
      return null;
    }
    return sortByName(characters);
  }, [characters]);

  return (
    <div className="characters-list">
      {isListLoading
        ? (<Loading />)
        : !error
            ? (<div className="characters-list__items">
            {sortedCharacters?.map((character) => (
              <CharacterCard character={character} key={character.id} />
            ))}
            </div>)
            : (<Error error={error} />)}
    </div>
  );
};
