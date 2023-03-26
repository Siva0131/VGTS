import {createStore} from 'redux'
import indexReducer from '../Reducer/index'

export default function configureStore(initialState) {
    console.log(initialState);
    return createStore(indexReducer,initialState)
}
