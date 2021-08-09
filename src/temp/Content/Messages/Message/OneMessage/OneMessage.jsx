import React from 'react';
import OneMessagecss from './OneMessage.module.css';


function OneMessage(props) {
  return (
    <div>
    <div className={props.float}>
      <img src={props.logo} className={OneMessagecss.logo}/>
      {props.dialogUser}
      <div>
        : {props.message}
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    </div>
  );
}

export default OneMessage;
