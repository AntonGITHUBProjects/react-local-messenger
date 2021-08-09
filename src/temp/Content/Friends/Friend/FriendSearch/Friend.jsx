import React from 'react';
import Friendcss from './Friend.module.css';



function Friend(props) {
  return (
    <li className={Friendcss.Friend}>
        <img src={props.logo}/>
        {props.name}
    </li>
  );
}

export default Friend;
