import { combineReducers } from 'redux';

import counterReducer from "../containers/Counter/reducer";

const store = combineReducers({
    counterReducer
});

export default store;