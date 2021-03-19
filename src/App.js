import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/navbar'
import Main from './components/main'
import Footer from './components/footer'

const App = () => {
    return(
      <BrowserRouter>
        <NavBar/>  
        <Main/>
        <Footer/>
      </BrowserRouter>

    )
}

export default App