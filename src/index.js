import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Form} from './components/Signup_Form/Form';
import reportWebVitals from './reportWebVitals';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter} from "react-router-dom";

import'./Form.css';
import store from './store';
import {Provider} from 'react-redux';   

store.subscribe(()=>{console.log(store.getState())})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    {/* <Provider store={store}>
    <Form/>
    </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
