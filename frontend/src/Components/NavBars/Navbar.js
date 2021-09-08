import React from 'react';
import './navbar.css'
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router';
const cookies = new Cookies();
const baseUrl=`http://localhost/ecoturismo/backend/apiEcoturismo/logging.php`;

const Navbar = ( {isLoggedin} ) => {

    const cerrarSesion=()=>{
        cookies.remove('id_usuario', {path: "/"});
        cookies.remove('username', {path: "/"});
   
    }

    return (
        <div className="nav_container">
            <div className="nav_logo">
                <a className="nav_logo__bold" href="/">Eco</a>
                <a href="/">Turismo - Ecuador</a>
            </div>
            { isLoggedin ? ( 
                <div className="nav_usuario">
                    <a href="./" target="_self" onClick={()=>cerrarSesion()}>Cerrar Sesión</a>
                </div>
                ) : (
                <div className="nav_usuario">
                        <a href="./signup" target="_self">Registrarse</a>
                </div>
                )
            }
        </div>
    )
}

export default Navbar;