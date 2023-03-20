import React from 'react';
import { Auth } from '../../components/Auth/Auth';
import { Logo } from '../../components/Logo/Logo';
import { Search } from '../../components/Search/Search';
import { CharactersList } from '../../components/CharactersList/CharactersList';
import './MainPage.css';

export const MainPage = (): JSX.Element => (
  <div className="main-page">
    <div className='auth-wrapper'>
      <Auth />
    </div>
    <Logo />
    <Search />
    <CharactersList />
  </div>
);
