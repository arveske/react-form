import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from './store/reducers';

const baseState = {};
const mw = [thunk];

const store = createStore(rootReducer, baseState, applyMiddleware(...mw))

export default store;
