import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import inks from './ink'
import canvases from './canvas'
import user from './user'
import saved_inks from './saved_inks'
import session_saved_inks from './sessionSaved_inks'


const rootReducer = combineReducers({
  session,
  inks,
  canvases,
  user,
  saved_inks,
  session_saved_inks
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
