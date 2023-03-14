import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterCardModel } from '../../services/charactersTypes';
import './CharacterCard.css';

interface CharacterCardProps {
  character: CharacterCardModel;
}

export const CharacterCard = ({
  character
}: CharacterCardProps): JSX.Element => (
    <div className="character-card">
      <Link to={`character/${character.id}`} className="character-card__link">
        <img
          className="character-card__image"
          src={`${character.image}`}
          alt={character.name}
        />
        <div className="character-card__text-content">
          <h2 className="character-card__name">{character.name}</h2>
          <span className="character-card__species">{character.species}</span>
        </div>
      </Link>
    </div>
);
