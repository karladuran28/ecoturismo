import React from 'react'
import './LeftMenu.css'

const LeftMenu = () => {
    return (
        <div className="left-menu_container">
            <ul className="left-menu_container__list">
                <li><a href="/">Costa</a></li>
                <li><a href="/">Sierra</a></li>
                <li><a href="/">Oriente</a></li>
                <li><a href="/">Favoritos</a></li>
            </ul>
        </div>
    )
}

export default LeftMenu;