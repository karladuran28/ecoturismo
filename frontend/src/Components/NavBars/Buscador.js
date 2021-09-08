import React, { useState } from 'react';
import { Input } from 'reactstrap';
import './Buscador.css';
import lupa from '../../images/magnifying-glass.png';

function Buscador() {
    const [publicacion, setPublicacion]= useState("");

    const search = () => window.location.href = `/buscador/${publicacion}`
    

    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <div className="tag_lugares">
                        Rutas
                    </div>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8">
                    <div className="buscador">
                        <Input style={{width:"85%", borderColor: "purple", marginRight:"4px"}} 
                            placeholder="Buscar" 
                            value= {publicacion}
                            onChange={(e)=>setPublicacion(e.target.value)}/>
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