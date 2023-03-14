import React from 'react';
import { CharactersList } from '../../components/CharactersList/CharactersList';
import { Logo } from '../../components/Logo/Logo';
import { Search } from '../../components/Search/Search';
import './MainPage.css';

export const MainPage = (): JSX.Element => (
  <div className="main-page">
    <Logo />
    <Search />
    <CharactersList />
  </div>
);
