import React from 'react';
import Friendcss from './Friend.module.css';

let CREATEDIALOG={
  type:'CREATEDIALOG'
}

function Friend(props) {
  let createDialog=(e)=>{
    e.preventDefault();
    props.dataToCheck.currentDialogFriend=props.login;
    props.action(CREATEDIALOG);
  }
  return (
    <li className={Friendcss.Friend}>
        <img src={props.logo}/>
        {props.name}
        <br/>
        <button onClick={createDialog}>Написать</button>
    </li>
  );
}

export default Friend;
