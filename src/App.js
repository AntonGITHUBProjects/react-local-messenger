import React from 'react';
import './App.css';
import PersonalCabinet from './PersonalCabinet';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  if(props.store.currentUser==""){
    props.store.currentUser='admin';
  }
  if(props.store.dataToCheck.currentFriend==""){
    props.store.dataToCheck.currentFriend='admin';
  }
  return (
    <BrowserRouter>
      
    <Route render={()=><PersonalCabinet 
    dataToCheck={props.store.dataToCheck}
    currentUser={props.store.currentUser}
    action={props.store.dispatcher}
    name={props.store.users[props.store.currentUser].data.name}
    friend={props.store.users[props.store.currentUser].friends} 
    logo={props.store.users[props.store.currentUser].data.avatar} 
    friendSearch={props.store.users[props.store.dataToCheck.currentFriend]}
    dialogs={props.store.users[props.store.currentUser].dialogs}
    dataToAppend={props.store.dataToAppend}
    currentDialog={props.store.users[props.store.currentUser].data.currentDialog}/>}
   >
    </Route>

    </BrowserRouter>
//     import Header from './temp/Header/Header';
// import Sidebar from './temp/Sidebar/Sidebar';
// import Content from './temp/Content/Content';
// import Footer from './temp/Footer/Footer';
  // <BrowserRouter>
  //   <div className="App display-grid">
  //       <Header/>
  //       <div className="MainContent display-grid">
  //       <Sidebar />
  //       <Content friend={friendLists} dialogs={dialogs}/>
  //       </div>
  //       <Footer/>
  //   </div>
  // </BrowserRouter>
  );
}

export default App;
