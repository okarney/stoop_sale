import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS file
import Envelope from './Envelope'; // Import your Envelope component
import CountdownTimer from './CountdownTimer'; // Import CountdownTimer component

const Index = () => {
  return (
    <div>
      <Envelope />
      <CountdownTimer targetDate="2024-08-01T00:00:00" /> {/* Add CountdownTimer here */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);