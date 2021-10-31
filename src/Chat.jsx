import React, { useState } from 'react';
import './Chat.css';

const Chat = ({ chat }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = (event) => {
    event.stopPropagation();
    setCollapsed(!collapsed);
  };

  return (
    <div
      id={`chat-wrapper-${chat.id}`}
      className='chat-wrapper'
      onClick={(event) => toggleCollapse(event)}
    >
      <div className='chat-heading'>
        {collapsed && <span id={`expand-btn-${chat.id}`}>EXPAND</span>}
        <img src={chat?.author?.avatar} className='avatar' alt='user-avatar' />
        <span>{chat?.author?.name}</span>
      </div>
      {!collapsed && (
        <div id={`chat-message-box-${chat.id}`} className='chat-message-box'>
          {chat?.text}
          {chat?.replies &&
            chat?.replies.map((subChat) => <Chat chat={subChat} />)}
        </div>
      )}
    </div>
  );
};

export default Chat;
