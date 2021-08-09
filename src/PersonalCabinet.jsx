import React from 'react';
import Authorization from './temp/Authorization/Authorization';
import PersonalCabinetcss from  './PersonalCabinet.module.css';
import Registration from './temp/Registration/Registration';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Header from './temp/Header/Header';
import Sidebar from './temp/Sidebar/Sidebar';
import Content from './temp/Content/Content';
import Footer from './temp/Footer/Footer';

function PersonalCabinet(props) {
  return (
    <div className={PersonalCabinetcss.PersonalCabinet}>
    <Redirect from="/" to="/authorization"></Redirect>
    <Route path='/authorization' render={()=><Authorization 
    dataToCheck={props.dataToCheck} action={props.action}/>}/>
    <Route path='/registration' 
    render={()=><Registration action={props.action} 
    dataToAppend={props.dataToAppend}/>}/>
      <Route path='/main'>
       <Header name={props.name} action={props.action} 
       logo={props.logo}/>
       <div className="MainContent display-grid">
       <Sidebar action={props.action}/>
       <Content name={props.name} friend={props.friend} 
       dialogs={props.dialogs} action={props.action}
       dataToCheck={props.dataToCheck} friendSearch={props.friendSearch}
       currentUser={props.currentUser} logo={props.logo}
       currentDialog={props.currentDialog}/>
       </div>
       <Footer action={props.action}/>
      </Route>
    </div>
  );
}

export default PersonalCabinet;
