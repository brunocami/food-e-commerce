import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    const redirect = () => {
        {window.location.href="https://www.instagram.com/bruno_cami/?hl=es-la"}
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/" exact>
                            <span className="text-light" uk-icon="image"></span>
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/tragos">Tragos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/comida">Comida</NavLink>
                        </li>
                    </ul>
                    </div>
                    
                        <div className="d-flex justify-content-center">
                            <a>
                                <span className="text-danger" uk-icon="instagram" style={{marginRight: "15px"}} onClick={redirect}/>
                            </a>
                            <a>
                                <span className="text-success" uk-icon="whatsapp"/>
                            </a>
                                               
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar

