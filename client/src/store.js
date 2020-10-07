import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const intialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, intialState, compose(
    applyMiddleware(...middleware),

    // eslint-disable-next-line
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose
));

export default store