import {createStore} from 'redux'
import TodoReducer from "../reducer/index"


const store = createStore(TodoReducer)

export default store