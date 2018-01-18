import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reducer from './Reducers';
import {Provider} from 'react-redux';
import {createStore} from "redux";

let store = createStore(Reducer.reducer)

const Appl = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Appl />, document.getElementById('root'));