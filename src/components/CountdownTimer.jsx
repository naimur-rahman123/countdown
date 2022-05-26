import { useState, useEffect } from 'react';

const CountdownTimer = ({ date }) => {
  const newYearsDate = new Date(date);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-el days-c">
        <p className="big-text" id="days">
          {days}
        </p>
        <span>days</span>
      </div>
      <div className="countdown-el hours-c">
        <p className="big-text" id="hours">
          {hours}
        </p>
        <span>hours</span>
      </div>
      <div className="countdown-el mins-c">
        <p className="big-text" id="mins">
          {mins}
        </p>
        <span>mins</span>
      </div>
      <div className="countdown-el seconds-c">
        <p className="big-text" id="seconds">
          {String(seconds).padStart(2, '0')}
        </p>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
