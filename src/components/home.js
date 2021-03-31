import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {

    return (
        <div>
            <img className="w-100" src="/images/Food.jpg"/>
            <div className="jumbotron p-3 mb-2 bg-white">
                <h1 className="display-4 d-flex justify-content-center">Hello, world!</h1>
                <p className="lead d-flex justify-content-center text-center">CROESO, WELCOME TO PITCH BAR & EATERY, MILL LANE CARDIFF</p>
                <hr className="my-4 d-flex justify-content-center"/>
                <p className="d-flex justify-content-center text-center">We’re fiercely independent, priding ourself on simple, honest, modern Welsh food. Obsessively, we seek the best, most mouth-watering ingredients we can find locally from farmers, growers, makers and markets, fusing them together to create innovative flavours and fresh, vibrant, sumptuous dishes; putting our passion for your palate on a plate.</p>
                <p className="lead d-flex justify-content-center">
                    <button className="uk-button uk-button-default uk-button-large">CLICK TO EMAIL</button>
                </p>
            </div>
            <div className="container mw-100 bg-info">
                <div className="uk-child-width-1-2@s uk-grid-match" uk-grid>
                    <div className="container">
                        <NavLink to="/tragos" className="text-decoration-none col-12 col-lg-6">
                            <div className="m-3">
                                <div className="uk-card uk-card-default uk-card-hover uk-card-body text-center bg-dark bg-dark text-white">
                                    <h3 className="uk-card-title text-center text-white">TRAGOS</h3>
                                    <hr class="uk-divider-small"></hr>
                                    <p className="text-center">click to view our menu</p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to="/comida" className="text-decoration-none col-12 col-lg-6">
                            <div className="m-3">
                                <div className="uk-card uk-card-default uk-card-hover uk-card-body text-center bg-dark text-white">
                                    <h3 className="uk-card-title text-center text-white">COMIDA</h3>
                                    <hr class="uk-divider-small"></hr>
                                    <p className="text-center">click to view our menu</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
