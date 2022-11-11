import React from 'react';
import ms from './Message.module.css';

const Message = ({ chatAvatar, messageInChat, myAnswer }) => (
        <div className="messege owner">
            <div className={ms.messageInfo}>
                <img className={ms.avatar} src={chatAvatar} alt="" />
                <div className={ms.messageSmsOnlineTime}>
                    <div className={ms.messageSms}>{messageInChat}</div>
                    <span className={ms.span}>24.10.21</span>
                </div>
            </div>
            <div className={ms.messageContent}>
                <p className={ms.messageContentP}>{myAnswer}</p>
                <span className={ms.messageContentS }>12.12.2012</span>
            </div>
        </div>
);

export default Message;
