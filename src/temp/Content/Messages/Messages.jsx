import React from 'react';
import Messagescss from './Messages.module.css';
import {connect} from 'react-redux';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';


function Messages(props) {
  let dialog=props.dialogList;
  let messages=props.dialogList;
  let dialogList=()=>{
    return(dialog.map(
    (dialogNames,index1)=>{
        if(index1%2==0){
          return <Dialog dialogName={dialogNames[0]} 
          idDialog={dialogNames[1]} action={props.action}></Dialog>
        }
    }));
  }
  let messagesList=()=>{
    return(messages.map(
    (message,index1)=>{
        let indexNum = props.currentDialog+props.currentDialog+1;
        if(index1==indexNum){
          return <Message dialogMessages={message} action={props.action}
           currentUser={props.currentUser}/>;
        }
    }));
  }
  return (
    <div className={Messagescss.Messages}>
      <div className={Messagescss.DialogList}>
      <ul >
      {dialogList()}
      </ul>
      </div>
      <div>
      {messagesList()}
      </div>
      
        
        
    </div>
  );
}

export default Messages;
