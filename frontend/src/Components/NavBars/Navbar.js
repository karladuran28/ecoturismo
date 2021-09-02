import React from 'react';
import './navbar.css'

const Navbar = ( {isLoggedin} ) => {
    return (
        <div className="nav_container">
            <div className="nav_logo">
                <a className="nav_logo__bold" href="/">Eco</a>
                <a href="/">Turismo - Ecuador</a>
            </div>
            { isLoggedin && 
                <div className="nav_usuario">
                    <a href="/">Usuario</a>
                </div>
            }
        </div>
    )
}

export default Navbar;