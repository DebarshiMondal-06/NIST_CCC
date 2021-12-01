import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Context } from './Context';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './Admin/AdminContext';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer autoClose="2000" position="bottom-right" limit={1} />
      <Context>
        <AdminContext>
          <App />
        </AdminContext>
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
