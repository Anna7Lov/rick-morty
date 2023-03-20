import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export const NotFoundPage = (): JSX.Element => (
  <div className='not-found-page'>
    <p className='not-found-page__text'>Page not found</p>
    <span className='not-found-page__error'>404</span>
    <Link to="/" className='not-found-page__link'>GO HOME</Link>
  </div>
);
