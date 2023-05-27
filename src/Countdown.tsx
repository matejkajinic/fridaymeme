import React, { useEffect, useState } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const calculateTimeLeft = () => {
    const now = new Date();
    const nextFriday = new Date();
    nextFriday.setDate(now.getDate() + ((7 + 5 - now.getDay()) % 7));
    nextFriday.setHours(0, 0, 0, 0);
    const difference = nextFriday.getTime() - now.getTime();
    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutesDifference = Math.floor((difference / (1000 * 60)) % 60);
    const secondsDifference = Math.floor((difference / 1000) % 60);
    setTimeLeft(`${daysDifference} days, ${hoursDifference} hours, ${minutesDifference} minutes, ${secondsDifference} seconds until next Friday`);
  };

  return (
    <div>
      <p>{timeLeft}</p>
    </div>
  );
};

export default Countdown;
