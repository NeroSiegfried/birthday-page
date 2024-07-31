import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const section2 = document.getElementById('section-two');
root.render(
  <React.StrictMode>
    <App 
    location={section2}
    />
  </React.StrictMode>
);

