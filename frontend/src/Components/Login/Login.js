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
            contraseña: ''
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
        await axios.get(baseUrl, {params: {username: this.state.form.usuario, password: this.state.form.contraseña}})
        .then(response=>{
            console.log(response.data)
            return response.data;
          
        })
        .then(response=>{
            if(response.length>0){
                console.log("helow")
                var respuesta=response[0];
                console.log(respuesta);
                
                cookies.set('id_usuario', respuesta.id_usuario, {path: "/"});
                cookies.set('apellido', respuesta.apellido, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('usuario', respuesta.usuario, {path: "/"});
                alert(`Bienvenido ${respuesta.usuario} ${respuesta.apellido}`);
                this.props.setIsLoggedin(true);
                console.log("elpepe")
                
                /*window.location.href="./menu";*/
                
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
           
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
              name="contraseña"
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
