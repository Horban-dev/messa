import React from 'react';
import sb from './Sidebar.module.css';
import Navbar from '../navbar/Navbar';
import Chats from '../chats/Chats';

const Sidebar = () => (
        <div className={sb.sidebar}>
            <Navbar/>
            <Chats/>
        </div>
);

export default Sidebar;
