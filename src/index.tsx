import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import ReactDOM from "react-dom/client";
import { rootReducer } from "./redux/rootReducer";
import App from "./App";
import { sagaWatcher } from "./redux/saga/sagas";

const saga = createSagaMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(saga)));

saga.run(sagaWatcher);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
