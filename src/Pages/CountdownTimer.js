import React, { useState, useEffect } from "react";
import "./CountdownTimer.css"; // Assuming you place your styles in this file

const CountdownTimer = ({ initialTime, onExpire }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) {
      onExpire();
      return;
    }

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time, onExpire]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="countdown-timer">Time remaining: {time}s</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
