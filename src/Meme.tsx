import React from 'react';

const memes = [
  'Case of the Mondays',
  'Taco Tuesday',
  'Hump Day',
  'Throwback Thursday',
  'Meme for Friday',
  'Caturday',
  'Sunday Funday',
];

const Meme: React.FC = () => {
  const today = new Date();
  const day = today.toLocaleDateString('en-US', { weekday: 'long' });
  const dayIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].indexOf(day);
  const meme = memes[dayIndex];

  return (
    <div>
      <p>{meme}</p>
    </div>
  );
};

export default Meme;
