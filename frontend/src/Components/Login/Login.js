import React,{ Component } from 'react';
import "./login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.js';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const baseUrl=`http://localhost/ecoturismo/backend/apiEcoturismo/logging.php`;

class Login extends Component {
    state={
        form:{
            usuario: '',
            contrasena: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl+`?usuario=${this.state.form.usuario}&contrasena=${this.state.form.contrasena}`)
        .then(response=>{
            console.log(response.data)
            return response.data;
            
          
        })
        .then(response=>{
                var respuesta=response;
                console.log(respuesta);
                console.log(respuesta.id_usuario);
                cookies.set('id_usuario', respuesta.id_usuario, {path: "/"});
                cookies.set('usuario', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.username}`);
                this.props.setIsLoggedin(true);
                return response.data;
                /*window.location.href="./menu";*/
            
             /*  
            else{
               
            }*/
        })
        .catch(error=>{
            alert('El usuario o la contraseña no son correctos');
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('usuario')){
           
           /* window.location.href="./menu";*/
        }
    }
    
/**/
    render() {
        return (
   

    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="usuario"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="contrasena"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()} >Iniciar Sesión</button>
            
          </div>
        </div>
      </div>
        );
    }
}

export default Login;
