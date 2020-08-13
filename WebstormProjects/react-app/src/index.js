import React from "react";
import ReactDom from 'react-dom';
// import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';


const element = <h1>Hello World!</h1>
ReactDom.render(<App />, document.getElementById('root'));
