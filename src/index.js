import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/layout.css';

import './assets/css/bootstrap/css/bootstrap.min.css'
import './assets/css/icofont/icofont.min.css'
import './template/assets/img/profile-img.jpg'
import './assets/css/boxicons/css/boxicons.min.css'

import Navbar from "./components/Navbar"
import Animation from "./components/FirstImage"
import About from "./components/About"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
  <Navbar />
  <Animation />
  <About />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
