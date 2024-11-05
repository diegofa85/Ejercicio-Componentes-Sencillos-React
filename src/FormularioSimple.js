import React, { useState } from 'react';

function FormularioSimple() {
  const [nombre, setNombre] = useState('');
  const [mensajeBienvenida, setMensajeBienvenida] = useState('');

  // Maneja el cambio en el input
  const manejarCambio = (event) => {
    setNombre(event.target.value);
  };

  // Maneja el envío del formulario
  const manejarEnvio = (event) => {
    event.preventDefault();  // Evita la recarga de la página
    if (nombre.trim()) {
      setMensajeBienvenida(`¡Bienvenido, ${nombre}!`);
    } else {
      setMensajeBienvenida('Por favor, ingresa tu nombre.');
    }
  };

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={manejarCambio}
            placeholder="Ingresa tu nombre"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {mensajeBienvenida && <p>{mensajeBienvenida}</p>}
    </div>
  );
}

export default FormularioSimple;