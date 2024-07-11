import clothes from './clothes.JPG';
import './invite.css';
import { SocialIcon } from 'react-social-icons'

function Invite() {
  return (
      <body>
      <main> 
        <div className = "paper">
          <h1>What's the Stoop?</h1> 
          <p id = "tagline">Come out to our stoop sale this weekend to find the latest styles!</p>
          <img src={clothes} alt="Clothes Rack" />
          <p>📅 Date: Saturday, July 13</p>
          <p>⏰ Time: 8AM - 3PM </p>
          <p id = "location">&nbsp;📍 &nbsp;Location: Carroll Gardens on the corner of 4th St. and 2nd Ave. </p>
          <p>Spread the word!</p>
          <div className = "social">
            <SocialIcon url="https://instagram.com" style={{ height: 35, width: 35 }}/>
            <SocialIcon url="https://x.com" style={{ height: 35, width: 35 }}/>
            <SocialIcon url="https://facebook.com" style={{ height: 35, width: 35 }}/>
            <SocialIcon url="https://tiktok.com" style={{ height: 35, width: 35 }}/>
          </div>
          
        </div>
    </main>
    </body>
  );
  
}

export default Invite;
