import React,{ useContext, useState } from 'react';
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.js';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import AuthContext from '../../auth/AuthContext';
import { types } from '../../types/types';
import { Redirect } from 'react-router';


const Login = ( { isLoggedIn, setIsLoggedin} ) => {
    const cookies = new Cookies();
    const baseUrl=`http://localhost/ecoturismo/backend/apiEcoturismo/logging.php`;

    const [state, setState] = useState({
        usuario: '',
        contrasena: ''
    })


    const { dispatch } = useContext(AuthContext);

    const handleChange= (e) =>{

        const new_state = {...state};
        new_state[e.target.name] = e.target.value;

        setState(new_state);
    }

    const iniciarSesion = async()=>{
        await axios.get(baseUrl+`?usuario=${state.usuario}&contrasena=${state.contrasena}`)
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if (response.code != "404") {
                let respuesta=response;
                console.log(respuesta);
                console.log(respuesta.id_usuario);
                cookies.set('id_usuario', respuesta.id_usuario, {path: "/"});
                cookies.set('usuario', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.username}`);
                setIsLoggedin(true);

                dispatch({
                    type: types.login,
                    payload: {
                        usuario: respuesta.id_usuario,
                        usuario_nombre: respuesta.username,
                    }
                })
                

                return response.data;
            } else {
                throw "error";
            }

                /*window.location.href="./menu";*/
        })
        .catch(error=>{
            alert('El usuario o la contraseña no son correctos');
        })

    }

    const componentDidMount = () => {
        if(cookies.get('usuario')){
           
           /* window.location.href="./menu";*/
        }
    }
    
/**/
    return (
   

    <div className="containerPrincipal">
        <div className="img_container">
            <img alt="montana_ecuador" src="https://i.imgur.com/ceACQbv.jpg" className="img_registro"/>
        </div>
        <div className="containerSecundario">
          <h5 className="registro_titulo">EcoTurismo Ecuador</h5>
          <div className="registro_cont_form">
          <div className="form-group registro_form">
            <label>Usuario: </label>
            <input
              type="text"
              className="form-control"
              name="usuario"
              onChange={ handleChange }
            />
            <label>Contraseña: </label>
            <input
              type="password"
              className="form-control"
              name="contrasena"
              onChange={ handleChange }
            />
            <div className="registro_submit">
                <button className="btn btn-primary" onClick={ iniciarSesion } >Iniciar Sesión</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    );

}

export default Login;
