
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import { promiseMiddleware, localStorageMiddleware } from './middleware'
export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createRootReducer(history), // root reducer with router state
  preloadedState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      promiseMiddleware,
      localStorageMiddleware
      // ... other middlewares ...
    ),
  ),
)

  return store
}