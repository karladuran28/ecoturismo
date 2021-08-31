import React, {useState, useEffect} from 'react';
import Buscador from './NavBars/Buscador.js';
import './Main.css';
import { Link } from 'react-router-dom';

const Main = () => {
    const [fotos, setFotos] = useState([]);
    const [fotosPub, setFotosPub] = useState([]);

    useEffect(() => {
        /* Ruta Betsy: "http://localhost:3000/backend/apiEcoturismo/obtenerFotos.php"
            Ruta Karla: "http://localhost/ecoturismo/backend/apiEcoturismo/obtenerFotos.php"
        */
        fetch("http://localhost/ecoturismo/backend/apiEcoturismo/obtenerFotos.php")
          .then(response => response.json())
          .then(data => {
            setFotos(data)
          })
          .catch(error => console.log('Hubo un error ' + error));
    }, [])
   
    useEffect(() => {
        /* obtiene id publicacion de cada foto y lo agrega a foto */
        setFotosPub([]);
        fotos.map((item, index) => {
            fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/complex/getPubByFoto.php?id_foto=${item.id_foto}`)
            .then(response => response.json())
            .then(data => {
              setFotosPub((fotosPub) => [...fotosPub, {key: index, id_foto: item.id_foto, id_publicacion: data[0].id_publicacion}])
            })
            .catch(error => console.log('Hubo un error ' + error));
            return true;
        })

    }, [fotos])

    const encontrarIdPub = (id_foto) => {
        let result = "";
        fotosPub.map((item, index) => {
            if(item.id_foto === id_foto) {
                result = item.id_publicacion;
            }
            return 1;
        });
        return result;
    }

    const RenderLugares = () =>{

        return (
            <div className="tarjeta_lugar">
            {fotos.map( foto => (
                <Link to={{ pathname: `/pub/${encontrarIdPub(foto.id_foto)}`, state: { id: encontrarIdPub(foto.id_foto) }}}>
                    <img src={foto.url}
                        alt={foto.id_foto}
                        key={foto.id_foto} 
                        id={foto.id_foto} 
                        className="card-img-top foto_lugar"
                    />
                </Link>
                
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