import React, {useState, useEffect} from 'react';
import './Lugar.css';

function Lugar() {

    const [comentarios, setComentarios] = useState([])
    
    useEffect(() => {
        const id_publicacion= 4;
        fetch(`http://localhost:4000/backend/apiEcoturismo/getByID/obtenerComentarios.php?id_publicacion=${id_publicacion}`)
          .then(response => response.json())
          .then(data => {
            setComentarios(data)
          })
          .catch(error => console.log('Hubo un error ' + error))
        
    }, [])

    const RenderComentarios = () => {
        return(
            <div>
            {
                comentarios.map( comentario => (
                    <div className="box_comentario">
                        <img src={comentario.foto_perfil} className="fotoComentario" />
                        <p>{comentario.contenido}</p>
                    </div> 
                ))
            }
            <div className="box_comentario">
                        <img src="https:\/\/i.imgur.com\/xMuRwzN.jpg" className="fotoComentario" />
                        <input id="bordeInput" placeholder="Escribe un nuevo comentario ... "></input>
                    </div> 
                
            </div>
        )
    }

    return (
        <div >
            <div>
                <p> Nombre del lugar </p>
            </div>

            <div className="contenedorPrincipal">
                <div id="contenido_publicacion">
                    <img src="https:\/\/i.imgur.com\/iP8MxbU.jpg" style={{borderRadius: "20px", minWidth: "95%", height: "400px"}}/>
                    
                    <div style={{marginTop:"15px"}}>
                        <div id="titleComentario">
                            <b><p>Comentarios</p> </b>
                        </div>
                        <RenderComentarios/>
                    </div>




                </div>

                <div id="detalleUsuario">
                    <div className="box_usuario"> 
                        <img src="https:\/\/i.imgur.com\/PU4oYy0.png" className="fotoUsuario" />
                        <p>Carlos Zamora</p>
                    
                    </div>

                </div>
            </div>

                
        </div>

            )
}

export default Lugar;