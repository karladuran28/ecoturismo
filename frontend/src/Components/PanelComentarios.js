import React, {useState, useEffect, useContext} from 'react';
import Comentario from './Comentario';
import './panelComentarios.css';
import boton_comentar from '../images/top.png';
import AuthContext from '../auth/AuthContext';

const PanelComentarios = ( { usuario, id_publicacion} ) => {

    /* NOTA: El usuario que comenta es el mismo que creó publicación, 
            debería ser el usuario que está loggeado.
    */

    const { usuario:usuario_sesion } = useContext(AuthContext);

    const [inputValue, setInputValue] = useState('');
    const [comentarios, setComentarios] = useState([]);

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
    }
    useEffect(() => {
        fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/complex/getComByPub.php?id_publicacion=${ id_publicacion }`)
        .then(response => response.json())
        .then(data => {
            setComentarios(data);
        })
        .catch(error => console.log('Hubo un error en obtener comentarios ' + error));
    }, [id_publicacion, comentarios])

    const addComentario = () => {
        if ( inputValue.trim().length > 2 && inputValue.trim().length < 500) {
            const data = {
                contenido: inputValue,
                id_usuario: usuario_sesion.usuario,
                id_publicacion: id_publicacion,
            }
            
            fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/insertarComentario.php`, {
                method: 'POST',
                mode: 'cors', 
                body: JSON.stringify(data)
            })
                .then(() => setInputValue(""))
                .catch(e => console.log("Hubo un error", e))
        }
        else{
            alert("Oops! Ingresa un comentario relevante para otros usuarios. ");
        }
    }

    return (
        <div className="panel_comentarios">
            <p className="panel_comentarios_titulo">Comentarios</p>
            <div className="comentarios">
                <div className="comentarios_scroll">
                    {comentarios.map((item, index) => {
                        return <Comentario key={index} comentario={item}/>
                    })}
                </div>
                <div className="comentarios_anadir">
                    <img className="usuario_foto_icono foto_margin" src={usuario?.foto_perfil} alt={usuario_sesion?.nombre}></img>
                    <div className="comentarios_form">
                        <form className="comentario_form">
                                <textarea 
                                    className="input_comentario"
                                    type="text" 
                                    name="comentario"
                                    value={ inputValue }
                                    onChange={ handleInputChange }
                                    placeholder="Escribe aquí tu comentario..." 
                                    aria-multiline/>
                         
                        </form>
                    </div>
                    <div className="box_boton_comentario" onClick={addComentario}>
                        <img className="boton_comentar" alt="boton para comentar" src={boton_comentar} width="100%" height="60%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelComentarios;