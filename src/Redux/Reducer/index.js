import {combineReducers} from 'redux'
import userdata from "./userdata"


const indexReducer = combineReducers({
    userdata:userdata
})

export default indexReducer