import React, {useState, useEffect} from 'react';
import './comentario.css';
import './panelComentarios.css';

const Comentario = ( {comentario} ) => {

    const [usuarioCom, setUsuarioCom] = useState([]);

    useEffect(() => {
        fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/getByID/obtenerPersonas.php?id_usuario=${ comentario["id_usuario"] }`)
        .then(response => response.json())
        .then(data => {
            setUsuarioCom([data["nombre"], data["apellido"], data["foto_perfil"]]);
        })
        .catch(error => console.log('Hubo un error en obtener comentarios ' + error));
            
    }, [comentario])

    return (
        <div className="comentario_ind">
            {/* foto perfil */}
            <div>
                <img 
                    className="usuario_foto_icono foto_margin" 
                    src={usuarioCom[2]} 
                    alt={`${usuarioCom[0]} ${usuarioCom[1]}`}
                ></img>
            </div>
            {/* nombre y contenido */}
            <div>
                <p className="publicacion_nombre_usuario">{`${usuarioCom[0]} ${usuarioCom[1]}`}</p>
                <p className="comentario_contenido">{comentario["contenido"]}</p>
            </div>
        </div>
    )
}

export default Comentario;