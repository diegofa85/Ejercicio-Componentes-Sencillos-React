import React from 'react';
import './App.css';
import FormularioSimple from './FormularioSimple';
import Contador from './Contador';
import ToggleVisibilidad from './ToggleVisibilidad';
import ListaTareas from './ListaTareas';
import BuscadorProductos from './BuscadorProductos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejercicio Componentes Sencillos React</h1>
        
        <FormularioSimple />
        <Contador />
        <ToggleVisibilidad />
        <ListaTareas />
        <BuscadorProductos />

      </header>
    </div>
  );
}

export default App;