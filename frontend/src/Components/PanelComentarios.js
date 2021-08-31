import React, {useState} from 'react';
import Comentario from './Comentario';
import './panelComentarios.css';

const PanelComentarios = ( {comentarios, usuario} ) => {

    /* NOTA: El usuario que comenta es el mismo que creó publicación, 
            debería ser el usuario que está loggeado.
    */

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 && inputValue.trim().length < 500) {
            console.log(inputValue);
            setInputValue('');
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
                    <img className="usuario_foto_icono foto_margin" src={usuario?.foto_perfil} alt={usuario?.nombre}></img>
                    <div className="comentarios_form">
                        <form onSubmit={ handleSubmit } className="comentario_form">
                            <input 
                                className="input_comentario"
                                type="text" 
                                name="comentario"
                                value={ inputValue }
                                onChange={ handleInputChange }
                                placeholder="Escribe aquí tu comentario..." />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PanelComentarios;