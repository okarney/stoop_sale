import React, { useState } from 'react';
import './Envelope.css'; // Import CSS for styling
import clothes from './clothes.JPG';
import { SocialIcon } from 'react-social-icons';
import StoopMap from './Map';
import CountdownTimer from './CountdownTimer';

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
        <div id="paper" className={isOpen ? '' : 'hidden'}>
          <button id="close-button" onClick={closeEnvelope}>Close</button>
          <h1>What's the Stoop?</h1> 
          <p id="tagline">Come out to our stoop sale this weekend to find the latest styles!</p>
          <img src={clothes} alt="Clothes Rack" />
          <p>📅 Date: Saturday, July 13</p>
          <p>⏰ Time: 8AM - 3PM </p>

          <p>📍 Location: Carroll Gardens on the corner of Court St. and 2nd Pl. </p>
           <p>Spread the word!</p>
          <div className = "social">
            <SocialIcon url="https://instagram.com" style={{ height: 35, width: 35 }}/>
            <SocialIcon url="https://x.com" style={{ height: 35, width: 35 }}/>
            <SocialIcon url="https://facebook.com" style={{ height: 35, width: 35 }}/>
            <SocialIcon url="https://tiktok.com" style={{ height: 35, width: 35 }}/>

          </div>
          <div style={{justifyContent: "center", display: "flex"}}>
          <StoopMap></StoopMap>
          <CountdownTimer></CountdownTimer>
          </div>
          </div>

          
        
{/*
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
          <StoopMap />
          <CountdownTimer targetDate="2024-07-13T08:00:00" /> {/* Add CountdownTimer here */}
        </div>

      </div>
  );
};

export default Envelope;
