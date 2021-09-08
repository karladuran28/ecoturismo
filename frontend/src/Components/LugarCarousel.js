import React, {useEffect, useState} from 'react'
import './lugarCarousel.css';

const LugarCarousel = ( {lugares, id_publicacion} ) => {

    const [fotos, setFotos] = useState([]);
    
    /* obtener fotos */

    const obtenerFotos = (id_lugar) => {
        fetch(`http://localhost/ecoturismo/backend/apiEcoturismo/complex/getFotoByLugar.php?id_lugar=${ id_lugar }`)
        .then(response => response.json())
        .then(data => {
            setFotos((fotos) => [...fotos, data[0]]);
        })
        .catch(error => console.log('Hubo un error en obtener comentarios ' + error));
    }

    useEffect(() => {
        setFotos([]);
        lugares.map((item, index) => obtenerFotos(item["id_lugar"]));
    }, [id_publicacion, lugares])

    return (
        <div className="carousel_container">
            <div id="carouselExampleIndicators" className="carousel slide w-100 h-100" data-ride="carousel" interval="2000">
                <ol className="carousel-indicators">
                    {fotos.map((item, index) => {
                        if (index === 0) {
                           return <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className="active"></li>
                        }
                        return <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index}></li>
                    })}
                </ol>
                <div className="carousel-inner">
                    {fotos.map((item, index) => {
                        if (index === 0) {
                            return (
                                <div key={index} className="carousel-item active img_item">
                                    <img className="d-block w-100 img_carousel" src={item["url"]} alt={item["id_lugar"]}/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{(lugares.filter(lugar => lugar["id_lugar"] === item["id_lugar"]))[0]?.["nombre"]}</h5>
                                    </div>
                                </div>
                            )
                        }
                        return (
                            <div key={index} className="carousel-item img_item">
                                <img className="d-block w-100 img_carousel" src={item["url"]} alt={item["id_lugar"]}/>
                                <div className="carousel-caption d-none d-md-block">
                                        <h5>{(lugares.filter(lugar => lugar["id_lugar"] === item["id_lugar"]))[0]?.["nombre"]}</h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>             
        </div>
    )
}

export default LugarCarousel;
