import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Envelope from './Envelope'; // Import your main Envelope component

const Index = () => {
  // State to toggle between components
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  // Function to toggle showing another component
  const toggleComponent = () => {
    setShowAnotherComponent(!showAnotherComponent);
  };

  return (
    <div>
      <button onClick={toggleComponent}>
        {showAnotherComponent ? 'Show Envelope' : 'Show Another Component'}
      </button>

      {showAnotherComponent ? <AnotherComponent /> : <Envelope />}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);