import React, {useState, useEffect} from 'react';
import LeftMenu from './LeftMenu';
import Navbar from './navbar';

const Main = () => {
    const [lista, setLista] = useState([])

    useEffect(() => {
        fetch("http://localhost/ecoturismo/backend/apiEcoturismo/obtenerComentarios.php")
          .then(response => response.json())
          .then(data => {
            setLista(data)
          })
          .catch(error => console.log('Hubo un error ' + error))
        
    }, [])
    
    console.log(lista)

    return(
        <div>
            <Navbar />
            <LeftMenu />
        </div>

    )
}

export default Main;