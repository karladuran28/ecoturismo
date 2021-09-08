import React, {useState, useEffect} from 'react'
import LeftMenu from './NavBars/LeftMenu';
import { useParams } from "react-router-dom";
import PanelComentarios from './PanelComentarios';
import './publicacion.css';
import Etiqueta from './Etiqueta';
import LugarCarousel from './LugarCarousel';
import Mapa from './Mapa';

const Publicacion = () => {
    const [idPublicacion,   setIdPublicacion]   = useState('');
    const [idUsuario,       setIdUsuario]       = useState('');
    const [likes,           setLikes]           = useState('');
    const [nombrePub,       setNombrePub]       = useState('');
    const [usuario,         setUsuario ]        = useState({});
    const [etiquetas,       setEtiquetas]       = useState([]);
    const [comentarios,     setComentarios]     = useState([]);
    const [duracionRuta,    setDuracionRuta]    = useState('');
    const [nombreRuta,      setNombreRuta]      = useState([]);
    const [lugares,         setLugares]         = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/getByID/obtenerPublicaciones.php?id_publicacion=${ id }`)
        .then(response => response.json())
        .then(data => {
            setIdPublicacion(data["id_publicacion"]);
            setIdUsuario(data["id_usuario"]);
            setNombrePub(data["nombre"]);
            setLikes(data["likes"]);
            setNombrePub(data["nombre"]);
            return data["id_usuario"];
        })
        /* obtiene usuario */
        .then( id_user => {
            fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/getByID/obtenerPersonas.php?id_usuario=${ id_user }`)
            .then(response => response.json())
            .then(data => {
                setUsuario(data);
            })
            .catch(error => console.log('Hubo un error en obtener el usuario ' + error));
        })
        .catch(error => console.log('Hubo un error ' + error));

    }, [id, likes, idUsuario, nombrePub]);

    /* obtener ruta, etiquetas y lugares*/
    useEffect(() => {
        fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/complex/getRutaByPub.php?id_publicacion=${ idPublicacion }`)
        .then(response => response.json())
        .then(data => {
            setNombreRuta(data["nombre"]);
            setDuracionRuta(data["duracion"]);
            return data["id_ruta"];
        })
        .then( id_ruta => {
            fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/complex/getTagByRuta.php?id_ruta=${ id_ruta }`)
            .then(response => response.json())
            .then(data => {
                setEtiquetas(data);
            })
            .catch(error => console.log('Hubo un error en obtener las etiquetas ' + error));
            return id_ruta;
        })
        .then(id_ruta => {
            fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/complex/getLugarByRuta.php?id_ruta=${ id_ruta }`)
            .then(response => response.json())
            .then(data => {
                setLugares(data);
            })
            .catch(error => console.log('Hubo un error en obtener los lugares ' + error));
        })
        .catch(error => console.log('Hubo un error en obtener el usuario ' + error));

    }, [idPublicacion])

    /* obtener comentarios */
    useEffect(() => {
        fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/complex/getComByPub.php?id_publicacion=${ id }`)
        .then(response => response.json())
        .then(data => {
            setComentarios(data);
        })
        .catch(error => console.log('Hubo un error en obtener comentarios ' + error));
    }, [id])

    const newLike = () => {
        const nroLikes = parseInt(likes)+1;
        fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/updateLikesInPublicaciones.php`, {
                method: 'POST',
                mode: 'cors', 
                body: JSON.stringify( { likes: nroLikes, id_publicacion: idPublicacion } )
            })
            .then(() => setLikes(nroLikes))
            .catch(e => console.log("Hubo un error", e))
    }

    return (
        <>
            <div className="main_content">
                <LeftMenu />
                <div className="publicacion_container animate__animated animate__fadeIn">
                    <div className="publicacion_panel_izq">
                        <div className="pub_container_titulo">
                            <p className="pub_titulo">{ nombrePub }</p>
                            <hr/>
                        </div>
                        <div className="pub_mapa_container">
                            <div className="pub_container_titulo">
                                <p className="pub_subtitulo">{ nombreRuta } - { duracionRuta }</p>
                                <hr/>
                            </div>
                            <Mapa lugares={ lugares }/>
                        </div>
                        <div className="pub_lugares_container">
                            <div className="pub_container_titulo">
                                <hr/>
                                <p className="pub_subtitulo">Lugares</p>
                                <hr/>
                            </div>
                            {/* carousel */}
                            <div className="lugar_carousel">
                                <LugarCarousel lugares={ lugares } id_publicacion={ id }/>
                            </div>
                        </div>

                        {/* posible spotify API */}

                    </div>
                    {/* usuario, likes, etiquetas, comentarios */}
                    <div className="publicacion_panel_der">
                        {/* info usuario */}
                        <div className="publicacion_usuario">
                            <img className="usuario_foto_icono" src={usuario?.foto_perfil} alt={usuario?.nombre}></img>
                            <p className="publicacion_nombre_usuario">{usuario?.nombre} {usuario?.apellido}</p>
                        </div>
                        {/* likes */}
                        <div className="publicacion_likes">
                            <div style={{ cursor: "pointer"}} onClick={newLike} >
                            <img className="icon_like" alt="heart_icon" src="https://icones.pro/wp-content/uploads/2021/02/icone-de-coeur-violet-1.png" /> 
                            </div>
                            <p id="num_likes">{likes}</p>
                        </div>
                        {/* etiquetas */}
                        <div className="publicacion_tags">
                            <div className="publicacion_tag_icono">
                                <img className="icon_tag" alt="tag_icon" src="https://iconvulture.com/wp-content/uploads/2017/12/tag-black-shape.svg"></img>
                            </div>
                            <div className="publicacion_tag_lista">
                                {etiquetas.map((item, index) => {
                                    return <Etiqueta key={index} dup={item}/>
                                })}
                            </div>
                        </div>
                        {/* comentarios */}
                        <PanelComentarios usuario={usuario} id_publicacion={idPublicacion}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Publicacion;