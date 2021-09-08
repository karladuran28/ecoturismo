import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './signup.css';

const Signup = () => {

    const foto_defaut = 'https://i.imgur.com/561fYVl.png';

    const [data, setData] = useState({ 
        'nombre'        : '',
        'apellido'      : '',
        'usuario'       : '',
        'contrasena'    : '',
        'correo'        : '',
        'foto_perfil'   : foto_defaut,
     });

     const [errores, setErrores] = useState({
        'nombreErr'        : '',
        'apellidoErr'      : '',
        'usuarioErr'       : '',
        'contrasenaErr'    : '',
        'correoErr'        : '',
    })

    const [esCorrecto, setEsCorrecto] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('http://localhost/ecoturismo/backend/apiEcoturismo/signup.php', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then( data => {
            /* manejar errores, si está correcto, setear data a default */
            if (data === "ok") {
                console.log("correcto");
                setData({
                    'nombre'        : '',
                    'apellido'      : '',
                    'usuario'       : '',
                    'contrasena'    : '',
                    'correo'        : '',
                    'foto_perfil'   : foto_defaut,
                });
                setErrores({
                    'nombreErr'        : '',
                    'apellidoErr'      : '',
                    'usuarioErr'       : '',
                    'contrasenaErr'    : '',
                    'correoErr'        : '',
                });
                alert('Usuario creado exitosamente');
                setEsCorrecto(true);

            } else {
                setErrores(data);
            }
        })
        .catch(e => console.log("Hubo un error al registrar un nuevo usuario", e));
    }

    const handleChange = (e) => { 
        
        const clave = e.target.id;
        const valor = e.target.value;
        
        setData( data =>  {
            const nueva_data = {...data};
            nueva_data[clave] = valor;
            return nueva_data;

        });
    }

    return (
            <div  className="registro_container">
                <div className="img_container">
                    <img alt="montana_ecuador" src="https://i.imgur.com/KyYEODJ.jpg" className="img_registro"/>
                </div>
                <div className="registro_contenido">
                <h5 className="registro_titulo">Crea una cuenta</h5>
                <div className="registro_cont_form">
                    <form className="registro_form" onSubmit={ handleSubmit }>
                        {/* usuario */}
                        <div className="registro_param">
                            <span className="span_registro">{ errores.usuarioErr }</span>
                            <input type="text" name="usuario" placeholder="Usuario" 
                                id="usuario" onChange={ handleChange } value={ data.usuario }/>
                        </div>
                        {/* contrasena */}
                        <div className="registro_param">
                        <span className="span_registro">{ errores.contrasenaErr }</span>
                            <input type="password" name="contrasena" placeholder="Contraseña"
                                id="contrasena" onChange={ handleChange } value={ data.contrasena }/>
                        </div>
                        {/* correo */} 
                        <div className="registro_param">
                        <span className="span_registro">{ errores.correoErr }</span>
                            <input type="text" name="correo" placeholder="E-mail"
                                id="correo" onChange={ handleChange } value={ data.correo }/>
                        </div>
                        {/* nombres */}
                        <div className="registro_param registro_nombre">
                            <div className="registro_nombre_valor">
                                <span className="span_registro">{ errores.nombreErr }</span>
                                <input type="text" name="nombre" placeholder="Nombre"
                                id="nombre" onChange={ handleChange } value={ data.nombre }/>
                            </div>
                            <div className="registro_nombre_valor">
                                <span className="span_registro">{ errores.apellidoErr }</span>
                                <input type="text" name="apellido" placeholder="Apellido"
                                id="apellido" onChange={ handleChange } value={ data.apellido }/>
                            </div>
                        </div>
                        {/* boton submit */}
                        <div className="registro_submit">
                            <input type="submit" value="Registrarse" className="btn btn-primary"/>
                        </div>                     
                    </form>
                </div>
                </div>
                { esCorrecto && <Redirect to="/"/> }
            </div>
    )
}

export default Signup;
