import React from 'react';
import Message from '../message/Message';
import msg from './Messages.module.css';

const Messages = ({
  chatAvatar, messageInChat, myAnswer,
}) => (
        <div className={msg.messages}>
            <Message chatAvatar={chatAvatar} messageInChat={messageInChat} myAnswer={myAnswer}/>
            <Message/>
        </div>
);

export default Messages;
