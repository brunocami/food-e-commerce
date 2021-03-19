import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home'
import Tragos from './tragos'
import Comida from './comida'


const Main = () => {
    return (
        <main>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/tragos">
                <Tragos/>
            </Route>
            <Route path="/comida">
                <Comida/>
            </Route>
        </main>
    )
}

export default Main
