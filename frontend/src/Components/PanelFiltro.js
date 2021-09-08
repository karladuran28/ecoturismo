import React, {useState, useEffect} from "react";
import Buscador from "./NavBars/Buscador";
import './Main.css';
import { useParams } from "react-router-dom";
import RenderLugares from './RenderPublicaciones';


const PanelFiltro = () =>{
    const [fotos, setFotos] = useState([]);
    const [fotosPub, setFotosPub] = useState([]);
    const { region: regionPubs } = useParams();

    useEffect(() => {
        fetch("http://localhost/ecoturismo/backend/apiEcoturismo/getPublicacionesByRegion.php", {
            method: "POST",
            mode: 'cors', 
            body: JSON.stringify( {region: regionPubs } )
        })
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


    return(
        <div style={{height:"100%"}}>
            <Buscador />
            <RenderLugares fotos={fotos} fotosPub={fotosPub}/>
            
        </div>
    )
}

export default PanelFiltro