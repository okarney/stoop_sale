import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';


const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isRunning, setIsRunning] = useState(true);

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    if (!isRunning) return;

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <div key={interval} className="time-segment">
        <div className="time-value">{timeLeft[interval]}</div>
        <div className="time-label">{interval}</div>
      </div>
    );
  });

  return (
    <div className="countdown-timer">
      {timerComponents.length ? (
        <>
          <div className="timer-display">{timerComponents}</div>
          <button className="toggle-button" onClick={toggleTimer}>
            {isRunning ? 'Pause' : 'Resume'}
          </button>
        </>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
};

export default CountdownTimer;
