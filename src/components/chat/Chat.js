import React from 'react';
import Messages from '../messages/Messages';
import Input from '../input/Input';
import ct from './Chat.module.css';

const Chat = ({
  headerLogo, headerName, chatAvatar, messageInChat, myAnswer,
}) => (
        <div className={ct.chat}>
            <div className={ct.chat_header}>
                <img className={ct.avatar} src={headerLogo} alt="avatar" />
                <span className={ct.name}>{headerName}</span>
            </div>
            <Messages chatAvatar={chatAvatar} messageInChat={messageInChat} myAnswer={myAnswer}/>
            <Input/>
        </div>
);

export default Chat;
