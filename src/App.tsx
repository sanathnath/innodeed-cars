import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import ShopPage from './pages/ShopPage';

const App:React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/learn/:id' element={<LearnPage />} />
      <Route path='/shop/:id' element={<ShopPage />} />
    </Routes>
  );
}

export default App;
