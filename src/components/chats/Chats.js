import React from 'react';
import Persons from '../persons/Persons';
import ch from './Chats.module.css';
import { dialogsData } from '../../data';

const Chats = () => (
        <div className={ch.chats}>
            <h1 className={ch.chats_title}>Chats</h1>
            <div>
            {dialogsData.map((item) => <Persons
                        pics={item.pics}
                        nick={item.nick}
                        text={item.text}
                        date={item.date}
                        key={item.id}
                    />)
            }
            </div>
        </div>
);

export default Chats;
