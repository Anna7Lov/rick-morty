import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectCharacter,
  selectIsCharacterFailed,
  selectIsCharacterLoading
} from '../../store/characters/selectors';
import { getCharacterThunk } from '../../store/characters/thunks';
import { CharacterItemModel } from '../../services/charactersTypes';
import { GoBack } from '../../components/GoBack/GoBack';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';
import './CharacterPage.css';

export const CharacterPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector(selectCharacter);
  const isCharacterLoading = useSelector(selectIsCharacterLoading);
  const characterError = useSelector(selectIsCharacterFailed);
  const dataTitles: string[] = ['gender', 'status', 'species', 'origin', 'type'];

  useEffect(() => {
    if (id) {
      dispatch(getCharacterThunk(id));
    }
  }, [id, dispatch]);

  return (
    <div className="character">
      <GoBack />
      {isCharacterLoading
        ? (<Loading />)
        : !isCharacterLoading && !characterError && character
            ? (<div className="character__item">
            <img
              className="character__image"
              src={character.image}
              alt={character.name}
            />
            <h1 className="character__name">{character.name}</h1>
            <h2 className="character__info-title">Informations</h2>
            <ul>
              {dataTitles.map((dataTitle) => {
                let dataValue = character[dataTitle as keyof CharacterItemModel];
                if (typeof dataValue === 'object') {
                  dataValue = dataValue.name;
                }
                return (
                  <li key={dataTitle} className="character__data">
                    <h3 className="character__data-title">
                      {dataTitle === 'species' ? 'specie' : dataTitle}
                    </h3>
                    <span className="character__data-value">
                      {dataValue === '' ? 'Unknown' : dataValue}
                    </span>
                  </li>
                );
              })}
            </ul>
            </div>)
            : (<Error error={characterError} />)}
    </div>
  );
};
