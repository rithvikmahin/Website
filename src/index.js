import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/layout.css';

import './assets/css/bootstrap/css/bootstrap.min.css'
import './assets/css/icofont/icofont.min.css'
import './assets/css/boxicons/css/boxicons.min.css'

import Navigation from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import WorkExperience from "./components/WorkExperience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <div>
      <Navigation />
    </div>
    <div>
      <Home />
      <About />
      <WorkExperience />
    </div>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
