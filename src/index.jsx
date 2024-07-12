import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Envelope from './Envelope';
import CountdownTimer from './CountdownTimer';

const Index = () => {
  return (
    <div>
      <Envelope />
      <CountdownTimer targetDate="2024-08-01T00:00:00" />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);