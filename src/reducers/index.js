import {combineReducers} from 'redux'
import DrinksReducer from './drinks/drinks-reducers'

const Reducer = combineReducers({
    drinks: DrinksReducer
})

export default Reducer