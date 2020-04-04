/* libs */
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
/* apps */
import rootReducer from './reducers/index.reducer';

export default function configureStore() {
  let middlewares: any[] = [];
  if (process.env.NODE_ENV === 'development') {
    middlewares = [loggerMiddleware, thunkMiddleware];
  } else if (process.env.NODE_ENV === 'production') {
    middlewares = [thunkMiddleware];
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

  return store;
}
