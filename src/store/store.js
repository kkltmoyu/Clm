import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

const configureStore = preloadedState => {
    return createStore (
        rootReducer,
        preloadedState,
        compose (
            applyMiddleware(createLogger)
        )
    );
}

const store = configureStore();

export default store;