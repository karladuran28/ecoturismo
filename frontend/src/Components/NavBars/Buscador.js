import React from 'react';
import { Input } from 'reactstrap';
import './Buscador.css';
import lupa from '../../images/search.png';
import {RenderLugares} from '../Main';

function Buscador() {

    const search = () => {
        console.log("Buscando..")
    }

    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <div className="tag_lugares">
                        Rutas
                    </div>
                </div>
                <div className="col-6">
                    <div className="buscador">
                        <Input style={{width:"90%", borderColor: "purple", marginRight:"4px"}} placeholder="Buscar" />
                        <img className="boton_busqueda" 
                            alt="heart_icon" 
                            src={lupa}
                            onClick={search}></img>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Buscador;