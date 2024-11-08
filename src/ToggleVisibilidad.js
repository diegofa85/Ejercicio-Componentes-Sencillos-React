import React, { useState } from 'react';

function ToggleVisibilidad() {
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <button onClick={toggle}>Mostrar/Ocultar</button>
            {visible && (
                <div id="contenido">
                    <p>HOLA</p>
                </div>
            )}
        </div>
    );
}

export default ToggleVisibilidad;