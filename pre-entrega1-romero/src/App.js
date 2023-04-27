import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi tienda en línea" />
    </div>
  );
}

export default App;