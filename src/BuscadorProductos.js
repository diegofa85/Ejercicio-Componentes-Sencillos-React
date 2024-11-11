import React, { useState } from 'react';

const productos = [
  { id: 1, nombre: 'Camiseta'},
  { id: 2, nombre: 'Zapatos'},
  { id: 3, nombre: 'Pantalón'},
  { id: 4, nombre: 'Sombrero'},
  { id: 5, nombre: 'Silla'}
];

function BuscadorProductos() {
  
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(productos);

  
  const manejarBusqueda = (evento) => {
    const palabraClave = evento.target.value;
    setBusqueda(palabraClave);

    
    const productosFiltrados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(palabraClave.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(palabraClave.toLowerCase())
    );

    setProductosFiltrados(productosFiltrados);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={manejarBusqueda}
      />

      <ul>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <li key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
            </li>
          ))
        ) : (
          <li>No se encontraron productos</li>
        )}
      </ul>
    </div>
  );
}

export default BuscadorProductos;