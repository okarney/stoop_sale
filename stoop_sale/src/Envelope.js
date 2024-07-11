import React, { useState } from 'react';
import './Envelope.css'; // Import CSS for styling

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openEnvelope = () => {
    setIsOpen(true);
  };

  const closeEnvelope = () => {
    setIsOpen(false);
  };

  return (
    <div id="container">
      <div id="envelope" className={isOpen ? 'open' : ''} onClick={openEnvelope}>
        <div id="flap"></div>
        <div id="letter"></div>
        <div id="wax-stamp"></div>
      </div>
      <div id="fullscreen-letter" className={isOpen ? '' : 'hidden'}>
        <button id="close-button" onClick={closeEnvelope}>Close</button>
        <div className="content">
          <h1>Neighborhood Garage Sale Extravaganza!</h1>
          <p>Dear Treasure Hunter,</p>
          <p>Get ready for the bargain bonanza of the year! Our community is hosting a massive garage sale, and you're invited to join the fun!</p>
          
          <h2>Mark Your Calendar</h2>
          <p><strong>Date:</strong> Saturday, June 15, 2024</p>
          <p><strong>Time:</strong> 7:00 AM - 3:00 PM</p>
          <p><strong>Location:</strong> Throughout Sunny Hills Neighborhood</p>
          
          <h2>What to Expect</h2>
          <ul>
            <li>Antiques and vintage finds</li>
            <li>Gently used furniture and home decor</li>
            <li>Children's toys and clothing</li>
            <li>Electronics and gadgets</li>
            <li>Books, movies, and music</li>
            <li>And much more!</li>
          </ul>
          
          <h2>Tips for Shoppers</h2>
          <ul>
            <li>Bring cash - not all sellers accept cards</li>
            <li>Arrive early for the best selection</li>
            <li>Bring your own bags or boxes</li>
            <li>Be prepared to haggle (politely!)</li>
            <li>Check our community map for participating homes</li>
          </ul>
          
          <p><strong>Parking:</strong> Please be considerate of residents and follow all posted parking signs.</p>
          
          <p><strong>Refreshments:</strong> Look out for lemonade stands and bake sales throughout the neighborhood!</p>
          
          <p>Don't miss this opportunity to find hidden treasures and meet your neighbors. Happy hunting!</p>
          
          <p>See you there,<br />
          The Sunny Hills Neighborhood Association</p>
        </div>
      </div>
    </div>
  );
};

export default Envelope;