import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

store.subscribe(() => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
        console.log(store.getState());
}
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default store;