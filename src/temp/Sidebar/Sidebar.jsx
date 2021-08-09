import React from 'react';
import sidebarcss from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

function Sidebar() {
  return (
    <div className={sidebarcss.Sidebar}>
      <ul className={sidebarcss.Navbar}>
        <li><NavLink to="/main"><i className="fa fa-home" aria-hidden="true"></i>Главная</NavLink></li> 
        <li><NavLink to="/main/profile"><i className="fa fa-user-circle-o" aria-hidden="true"></i>Мой профиль</NavLink></li>
        <li><NavLink to="/main/messages"><i className="fa fa-comments-o" aria-hidden="true"></i>Сообщения</NavLink></li>
        <li><NavLink to="/main/friends"><i className="fa fa-users" aria-hidden="true"></i>Друзья</NavLink></li>
      
      </ul>
    </div>
  );
}

export default Sidebar;
