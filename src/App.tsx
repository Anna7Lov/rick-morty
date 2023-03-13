import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import './App.css';

const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
