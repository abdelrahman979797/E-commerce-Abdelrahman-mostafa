import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import '../node_modules/sweetalert2/dist/sweetalert2.all';
// import Swal from '../node_modules/sweetalert2/dist/sweetalert2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);


