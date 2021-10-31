import './App.css';
import Chat from './Chat';
import { useState, useEffect } from 'react';
import { chatData } from './resource';

function App() {
  const [chatThread, setChatThread] = useState();

  // CHAT:
  // {
  //   author: {
  //     name: '',
  //     avatar: ''
  //   },
  //   text: '',
  //   replies: [
  //     CHAT...
  //   ]
  // }

  useEffect(() => {
    setChatThread(chatData);
  }, []);

  return (
    <div>
      <Chat chat={chatThread} />
    </div>
  );
}

export default App;
