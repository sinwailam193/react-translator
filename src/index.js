import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import axios from "axios";
import App from './components/app';
import reducers from "./reducers";
import { YANDEX_API } from "./config";
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';


const axiosInstance = axios.create({
    baseURL: YANDEX_API
});

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
