import React, {useEffect, useState} from 'react'

const Tragos = () => {

    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setDrinks(res.results)
            console.log(res.results)
        })
    },[])

    return (

        <>


            <div id="carouselExampleIndicators" className="carousel slide w-100" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="/images/Food_02.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="/images/Food_01.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="/images/Food_03.jpg" className="d-block w-100" alt="..."/>
                    </div>
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


            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 d-flex justify-content-center m-auto w-75">
                {drinks.map((trago) => {return(
                    <div className="uk-animation-toggle" tabindex="0">
                        <div className="uk-animation-scale-up">
                            <div className="p-2 d-flex justify-content-center">
                                <div className="uk-inline">
                                    <img src={trago.image} alt=""/>
                                    <div className="uk-overlay uk-overlay-default uk-position-bottom">
                                        <p>texto descriptivo</p>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>
                )})}
            </div>
        </>
    )
}

export default Tragos
