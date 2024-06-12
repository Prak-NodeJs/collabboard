import React, { useState } from 'react';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

const SERVER_URL ="http://localhost:5000";
const socket = io(SERVER_URL);
const Mobile = () => {
  const [input, setInput] = useState('');
  const { id } = useParams();

  const handleInputChange = (event) => {
    setInput(event.target.value);
    socket.emit('textInput', { id, text: event.target.value });
  };

  return (
    <div>
      <h1>Mobile Input</h1>
      <input type="text" value={input} onChange={handleInputChange} autoFocus />
    </div>
  );
};

export default Mobile;
