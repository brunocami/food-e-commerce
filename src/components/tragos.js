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
                <li key={drinks.id}>{drinks.name} {drinks.liquor}</li>
            )
        });
    }

    render() {
        return (
            <ul>
                {this.createListItems()}
            </ul>
        )        
    }

}

export default connect(mapStateToProps)(Tragos);
