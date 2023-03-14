import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CharacterPage } from './pages/CharacterPage/CharacterPage';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/character/:id' element={<CharacterPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
