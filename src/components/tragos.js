import React, { Component } from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        drinks: state.drinks
    };
}

class Tragos extends Component {

    createListItems() {
        return this.props.drinks.map((drinks) => {
            return(
                <>
                    <div className="card p-2 col-12 col-sm-12 col-md-6 col-lg-3 border-light" style={{width: "18rem"}}>
                        <div class="uk-animation-toggle" tabindex="0">
                            <div class="uk-animation-fade">
                                <img key={drinks.id} src={drinks.image} className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        
                        <div className="card-body p-0" key={drinks.id} id="acordion">
                            <h5 className="card-title text-center">{drinks.name}</h5>
                            <p className="text-center">US${drinks.price}</p>
                            <button class="uk-button uk-button-default col-4">-</button>
                            <button class="uk-button uk-button-default col-4">1</button>
                            <button class="uk-button uk-button-default col-4">+</button>
                            
                            <div className="collapse" id={"collapse-" + drinks.id}>
                                <p className="card-text text-secondary">FERMENTACIÓN MALOLÁCTICA NATURAL . Vino rubí , reflejos granates , seductor , mediana intensidad . notas de Frutos rojos , pimienta negra , chocolate , café y humo de roble francés . balanceado , acidez equilibrada , taninos suaves y dulces . es ideal para acompañar carnes rojas , pastas bien condimentadas y quesos semiduros .</p>
                            </div>
                            <a data-toggle="collapse" href={"#collapse-" + drinks.id} role="button" aria-expanded="false" aria-controls={"collapse-" + drinks.id} className="uk-button uk-button-default w-100">Ver más</a>
                        </div>
                    </div>
                </>
            )
        });
    }

    render() {
        return (
            <div className="container">
                <div className="container">
                    <div className="container mb-3 mt-3">
                        <h1 className="text-center">Almacén</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.createListItems()}
                    </div>
                </div>
            </div>
        )        
    }

}

export default connect(mapStateToProps)(Tragos);
