import React from 'react';
import './etiqueta.css';

const Etiqueta = ( {dup} ) => { 
    return (
        <div className="tag_box">
            <p className="tag_texto">{dup[1]}</p>
        </div>
    )
}

export default Etiqueta;
