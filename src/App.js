import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './reducers'
import NavBar from './components/navbar'
import Main from './components/main'
import Footer from './components/footer'

const store = createStore(Reducer)

const App = () => {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar/>  
          <Main/>
          <Footer/>
        </BrowserRouter>        
      </Provider>
    )
}

export default App