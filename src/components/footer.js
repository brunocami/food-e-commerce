import React from 'react'

const Footer = () => {
    return (
        <div className="jumbotron jumbotron-fluid mb-0 p-3 bg-dark d-flex justify-content-around">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a className="card-link">Card link</a>
                    <a className="card-link">Another link</a>
                </div>
            </div>
            <div className="container text-white w-50 p-3">
                <h1 className="display-4  text-white">Contact Us</h1>
                <p className="lead ">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <div className="d-flex flex-column">
                    <a className="text-white  text-decoration-none">0800 222 4678</a>
                    <a className="text-white  text-decoration-none">empanadas@hotmail.com</a>                    
                </div>

            </div>
        </div>
    )
}

export default Footer
