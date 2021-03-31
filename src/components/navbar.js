import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="container ml-5 ml-lg-2">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/tragos">Tragos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/comida">Comida</NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar

