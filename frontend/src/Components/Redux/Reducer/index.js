import { stateReducer } from './StateReducer';
import { distReducer } from './DistReducer';
import { blockReducer } from './BlockReducer';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    stateReducer,
    distReducer,
    blockReducer
})

export default rootReducer;