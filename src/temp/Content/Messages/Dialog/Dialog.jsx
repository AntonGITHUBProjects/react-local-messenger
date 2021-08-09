import React from 'react';
import Dialogcss from './Dialog.module.css';


function Dialog(props) {
  let SWITCHDIALOG={
    type:'SWITCHDIALOG',
    currentDialog:0
  }
  let switchDialog =()=>{
    SWITCHDIALOG.currentDialog=props.idDialog;
    props.action(SWITCHDIALOG);
  }
  return (
    <li className={Dialogcss.Dialog} onClick={switchDialog}>
      {props.dialogName}
    </li>
  );
}

export default Dialog;
