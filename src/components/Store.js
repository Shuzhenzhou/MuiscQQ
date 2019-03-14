import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Reducer from './Reducer'

var Store=createStore(Reducer,applyMiddleware(thunk))

export default Store;