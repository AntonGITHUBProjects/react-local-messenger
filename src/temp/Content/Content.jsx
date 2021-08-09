import React from 'react';
import contentcss from './Content.module.css';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import Friends from './Friends/Friends';
import Main from './Main/Main';
import {BrowserRouter, Route} from 'react-router-dom';;

function Content(props) {
  return (
    <div className={contentcss.Content}>
      <Route path='/main/profile' render={()=><Profile friendlist={props.friend} 
      name={props.name} action={props.action} logo={props.logo}/>}/>
      <Route path='/main/messages' render={()=><Messages dialogList={props.dialogs} 
      action={props.action} currentDialog={props.currentDialog}
      currentUser={props.currentUser} /> } />
      <Route path='/main/friends' render={()=><Friends friends={props.friend} 
      action={props.action} 
      dataToCheck={props.dataToCheck} friendSearch={props.friendSearch} 
      currentUser={props.currentUser}/>} />
      
    </div>

  );
}

export default Content;
