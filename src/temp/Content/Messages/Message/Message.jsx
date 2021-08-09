import React from 'react';
import Messagecss from './Message.module.css';
import OneMessage from './OneMessage/OneMessage';

let SENDMESSAGE={
  type:'SENDMESSAGE',
  messageData:{
    text:'',
    userDialog:'',
    date:new Date()
  }
}


function Message(props) {
  let messageList=props.dialogMessages;
  let messageInputRef = React.createRef();
  let messageText=()=>{
    let textMessage=messageInputRef.current.value;
    SENDMESSAGE.messageData.text=textMessage;
    textMessage='';
  }
  let sendMessage=(e)=>{
    props.action(SENDMESSAGE) 
    e.preventDefault();
  }
  let messages=()=>{
    return(messageList.map(
    (message,index1)=>{
        if(message.user==props.currentUser){
          return <OneMessage dialogUser={message.name} float={'left'} logo={message.logo} message={message.message.text}/>
        }
        else{
          return <OneMessage dialogUser={message.name} float={'right'} logo={message.logo} message={message.message.text}/>
        }
    }));
  }
  let user=()=>{
    for(let i=0;i<props.dialogMessages.length;i++){
      if(props.dialogMessages[i].user!=props.currentUser){
        SENDMESSAGE.messageData.userDialog = props.dialogMessages[i].user;
        break;
      }
    }
  }
  user();
  return (
    <div className={Messagecss.Message}>
      <div className={Messagecss.Messages}>
      {messages()}
      </div>
      <form className={Messagecss.Form}>
        <input type="text" className={Messagecss.MessageInput}
        onChange={messageText} ref={messageInputRef}/>
        <input type="submit" onClick={sendMessage} className={Messagecss.FormInput}/>
      </form>
    </div>
  );
}

export default Message;
