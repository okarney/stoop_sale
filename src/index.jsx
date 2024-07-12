import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS file
import Envelope from './Envelope'; // Import your Envelope component

const Index = () => {
  return (
    <div>
      <Envelope />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);