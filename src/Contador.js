import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Disminuir</button>
    </div>
  );
}

export default Contador;