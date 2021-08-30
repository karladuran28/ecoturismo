import React, {useState, useEffect} from 'react';

const Main = () => {
    const [lista, setLista] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/backend/apiEcoturismo/obtenerPersonas.php")
          .then(response => response.json())
          .then(data => {
            setLista(data)
          })
          .catch(error => console.log('Hubo un error ' + error))
        
    }, [])
    
    console.log(lista)

    return(
        <div>
            HOLA
        </div>

    )
}

export default Main;