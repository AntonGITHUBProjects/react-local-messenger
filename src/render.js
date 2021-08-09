import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './index.css';
import App from './App';
import store from './database/Store';


let reRender=()=>{
    ReactDOM.render(
      <React.StrictMode>
      <App store={store}/>
  </React.StrictMode>,
          document.getElementById('root')
        );
}
  export default reRender;
