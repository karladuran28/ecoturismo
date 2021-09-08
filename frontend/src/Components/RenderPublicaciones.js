import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const encontrarIdPub = (id_foto, fotosPub) => {
    let result = "";
    fotosPub.map((item, index) => {
        if (item.id_foto === id_foto) {
            result = item.id_publicacion;

        }
        return result;
    });
    return result;
}

const RenderLugares = ({ fotos, fotosPub }) => {


    return (
        fotos.length>0 ? (
            <div className="tarjeta_lugares">
                {fotos.map(foto => (
                    <div className="tarjeta_lugar" >
                        <Link to={{ pathname: `/pub/${encontrarIdPub(foto.id_foto, fotosPub)}`, state: { id: encontrarIdPub(foto.id_foto, fotosPub) } }}>
                            <img src={foto.imagen_representativa}
                                alt={foto.id_publicacion}
                                key={foto.id_publicacion}
                                id={foto.id_publicacion}
                                className="card-img-top foto_lugar"
                            />
                        </Link>

                        <div className="nombre_ruta">
                            <div className="title_publicacion">
                                <h5>{foto.nombre}</h5>
                            </div>
                            <div className="likes_box">
                                <img className="icon_like" alt="heart_icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-violet-1.png"></img>
                                <span className="nro_likes"> {foto.likes}</span>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        ) : (
            <div className="mensaje_vacio">
                No se han encontrado publicaciones
            </div>
        )
    );
}

export default RenderLugares;