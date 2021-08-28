import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {SliderProvider} from "./context/sliderContext";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SliderProvider>
    <App />
      </SliderProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

