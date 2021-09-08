import React from 'react'
import './leftMenu.css'

const LeftMenu = () => {
    return (
        <div className="left-menu_container">
            <div className='toggleMenu'>

                

                <div className='toggleContenido'>
                    <a href='/filtro/costa'>  Costa</a>
                    <a href='/filtro/sierra'> Sierra </a>
                    <a href='/filtro/oriente'> Oriente </a>
                    

                </div>

            </div>
        </div>
    )
}

export default LeftMenu;