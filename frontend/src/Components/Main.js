import React, {useState, useEffect} from 'react';
import Buscador from './NavBars/Buscador.js';
import './Main.css';

const Main = () => {
    const [fotos, setFotos] = useState([])

    useEffect(() => {

        fetch("http://localhost:3000/backend/apiEcoturismo/obtenerFotos.php")
          .then(response => response.json())
          .then(data => {
            setFotos(data)
          })
          .catch(error => console.log('Hubo un error ' + error))
        
    }, [])
    
    console.log(fotos);

    const RenderLugares = () =>{
        return (
            <div className="tarjeta_lugar">
            {fotos.map( foto => (
                <div className="card foto_lugar" id={foto.id} style={{width: "250px"}}>
                <img src={foto.url} className="card-img-top img-l" />
                    
                </div>
            ) )
            }
        </div>
        )
    }


    return(
        <div >
            <Buscador />
            <RenderLugares />
            
        </div>

    )
}

export default Main;