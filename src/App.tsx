import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Countdown from './Countdown';
import Meme from './Meme';
import './App.css';

Modal.setAppElement('#root');

const App: React.FC = () => {
  const [isFriday, setIsFriday] = useState<boolean>(false);

  useEffect(() => {
    checkIfFriday();
    const timer = setInterval(() => {
      checkIfFriday();
    }, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  const checkIfFriday = () => {
    const today = new Date();
    setIsFriday(today.getDay() === 5);
  };

  return (
    <div className="App" style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Roboto', fontSize: '2em' }}>
      <div>
        {isFriday ? (
          <div style={{ width: '15em', height: 'auto', paddingBottom: '157%', position: 'relative' }}>
            <iframe src="https://giphy.com/embed/JmVcakKIdojgpBC2iw" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>
        ) : (
          <p>It's not Friday</p>
        )}
      </div>
      <div>
        { !isFriday ? (<Countdown />) : (<div></div>)}
      </div>
      <div>
        { !isFriday ? (<Meme />) : (<div></div>)}
      </div>
    </div>
  );
};

export default App;
