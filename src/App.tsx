import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter/counter';
import { Gallery } from './components/gallery/gallery';

function App() {
  return (
    <div>
    <Counter/>
    <Gallery/>
    </div>
  );
}

export default App;
