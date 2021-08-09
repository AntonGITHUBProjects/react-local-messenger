import React from 'react';
import { NavLink } from 'react-router-dom';
import headercss from'./Header.module.css';
import PersonalCabinet from './PersonalCabinet/PersonalCabinet';

function Header(props) {
  return (
    <header className={headercss.Header}>
      <NavLink to="/main" className={headercss.imglink}>
        <img src='media/images/logo2.png' className={headercss.img}>
          </img>
      </NavLink>
      <div></div>
      <PersonalCabinet name={props.name} logo={props.logo} action={props.action}/>

    </header>
  );
}

export default Header;
