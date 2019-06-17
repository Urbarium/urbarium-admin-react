import LogRocket from 'logrocket';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
export default function configureStore(preloadedState, fbConfig, history) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk),
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        LogRocket.reduxMiddleware(), // for LogRocket redux context
        // ... other middlewares ...
      ),
    ),
  );

  return store;
}
