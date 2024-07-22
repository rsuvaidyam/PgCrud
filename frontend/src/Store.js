import { createStore } from 'redux'
import rootReducer from './Components/Redux/Reducer/index';

const store = createStore(rootReducer)

export default store;