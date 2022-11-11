import React from 'react';
import mn from './Main.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { chatsData } from './data';

const Main = () => (
        <div className={mn.main}>
            <div className={mn.container}>
    <Sidebar/>
    {chatsData.map((item) => <Chat
                key={item.id}
                headerLogo={item.headerLogo}
                chatAvatar={item.chatAvatar}
                headerName={item.headerName}
                messageInChat={item.messageInChat}
                myAnswer={item.myAnswer}
                />)
            }
            </div>
        </div>
);

export default Main;
