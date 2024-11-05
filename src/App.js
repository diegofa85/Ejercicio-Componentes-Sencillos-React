import React from 'react';
import './App.css';
import FormularioSimple from './FormularioSimple';  // Importamos el componente Formulario
import Contador from './Contador';      // Importamos el componente Contador

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplicación de Contador y Formulario</h1>
        
        {/* Llamamos al componente Formulario */}
        <FormularioSimple />

        {/* Llamamos al componente Contador */}
        <Contador />
      </header>
    </div>
  );
}

export default App;