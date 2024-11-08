import React, { useState } from 'react';

function FormularioSimple() {
  const [nombre, setNombre] = useState('');
  const [mensajeBienvenida, setMensajeBienvenida] = useState('');

  const manejarCambio = (event) => {
    setNombre(event.target.value);
  };

  const manejarEnvio = (event) => {
    event.preventDefault(); 
    if (nombre.trim()) {
      setMensajeBienvenida(`¡Bienvenido, ${nombre}!`);
    } 
  };

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <label>
          <input
            type="text"
            value={nombre}
            onChange={manejarCambio}
            placeholder="Ingresa tu Nombre"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {mensajeBienvenida && <p>{mensajeBienvenida}</p>}
    </div>
  );
}

export default FormularioSimple;