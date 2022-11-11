import React from 'react';
import pr from './Persons.module.css';

const Persons = ({
  pics, nick, text, date,
}) => (
        <div>
            <div className={pr.dialogs}>
                <img className={pr.avatar} src={pics} alt="avatar" />
                <div>
                    <div className={pr.name}>{nick}</div>
                    <span className={pr.last_sms}>{text}</span>
                </div>
                <p className={pr.chats_date}>{date}</p>
            </div>
            <div className={pr.divider}></div>
        </div>
);

export default Persons;
