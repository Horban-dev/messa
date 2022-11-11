import React from 'react';
import Search from '../search/Search';
import nav from './Navbar.module.css';

const Navbar = () => (
      <div>
         <img className={nav.navbar_img} src="https://us.123rf.com/450wm/koblizeek/koblizeek2001/koblizeek200100050/138262629-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg?ver=6" alt="user" />
           <Search />

       </div>
);

export default Navbar;
