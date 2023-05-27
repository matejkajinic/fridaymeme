import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Countdown from './Countdown';
import Meme from './Meme';
import './App.css';

Modal.setAppElement('#root');

const App: React.FC = () => {
  const [isFriday, setIsFriday] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    checkIfFriday();
    const timer = setInterval(() => {
      checkIfFriday();
    }, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);

  const checkIfFriday = () => {
    const today = new Date();
    setIsFriday(today.getDay() === 6);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App" style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Roboto', fontSize: '2em' }}>
      <div>
        {isFriday ? (
          <div style={{ width: '20em', height: 'auto', paddingBottom: '157%', position: 'relative' }} onClick={openModal}>
            <iframe src="https://giphy.com/embed/JmVcakKIdojgpBC2iw" width="100%" height="100%" style={{ position: 'absolute' }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          </div>
        ) : (
          <p>It's not Friday</p>
        )}
      </div>
      <div>
        <Countdown />
      </div>
      <div>
        <Meme />
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Mufasa Dance Video">
        <button onClick={closeModal}>Close</button>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/U6n2NcJ7rLc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Modal>
    </div>
  );
};

export default App;
