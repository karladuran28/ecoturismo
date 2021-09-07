import React from 'react';
import { Input } from 'reactstrap';
import './Buscador.css';

function Buscador() {
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <div className="tag_lugares">
                        Rutas
                    </div>
                </div>
                <div className="col-6">
                    <Input style={{width:"100%", borderColor: "purple"}} placeholder="Buscar"/>
                </div>
            </div>



        </div>
    )
}

export default Buscador;