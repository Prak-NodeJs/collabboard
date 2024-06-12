import React, { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const SERVER_URL = "http://localhost:5000";
const socket = io(SERVER_URL);

const Home = () => {
  const [connectedText, setConnectedText] = useState('');
  const [uniqueId, setUniqueId] = useState('');

  useEffect(() => {
    const id = uuidv4();
    setUniqueId(id);
    socket.emit('setup', id);

    socket.on('updateText', (text) => {
      setConnectedText(text);
    });
  }, []);

  return (
    <div>
      <h2>Scan QR on mobile to get connected:</h2>
      {connectedText?(<p>{connectedText}</p>):<QRCodeCanvas value={`https://91f9-2401-4900-1aa4-1b89-59c3-d082-354a-27dd.ngrok-free.app/mobile-view/${uniqueId}`} /> }
    </div>
  );
};

export default Home;
