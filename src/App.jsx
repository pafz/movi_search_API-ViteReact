import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import FilmList from './components/FilmList/FilmList';
import Footer from './components/Footer/Footer';
const vite = 'Vite + React';

function App() {
  return (
    <div className="App">
      <h1 className="vite">{vite}</h1>
      <Header />
      <FilmList />
      <Footer />
    </div>
  );
}

export default App;
