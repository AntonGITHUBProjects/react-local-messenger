import React from 'react';
import registrationReducer from './Reducers/registrationReducer';
import authorizationReducer from './Reducers/authorizationReducer';
import searchReducer from './Reducers/searchReducer';
import addFriendReducer from './Reducers/addFriendReducer';
import switchAccountReducer from './Reducers/switchAccountReducer';
import createDialogReducer from './Reducers/createDialogReducer';
import switchDialogReducer from './Reducers/switchDialogReducer';
import sendMessageReducer from './Reducers/sendMessageReducer';
const store={
  newUserID:0,
    users:{
      admin:{
        data:{
          name:'admin',
          login:'admin',
          password:'admin',
          avatar:'../media/images/logo.png',
          id:0,
          idDialog:0,
          currentDialog:1
        },
        friends : [
        ],
        dialogs:[
        ]
      },
    },




    dataToAppend:{
      login:'',
      password:1,
      name:'',
      textMessage:'',
      url:'',
      id:0
    },
    dataToCheck:{
      login:'',
      password:1,
      searchText:'',
      currentFriend:'',
      currentDialogFriend:''
    },
    currentUser:'',
    dispatcher(action){
      switch (action.type){
        case 'CREATEACCOUNT':
          registrationReducer();
        break;
        case 'INRCEASEID':
        store.dataToAppend.id+=1;
        break;
        case 'AUTHORIZATION':
          authorizationReducer();
        break;
        case 'SEARCHFRIENDS':
          searchReducer();
        break;
        case 'ADDFRIENDS':
          addFriendReducer();
        break;
        case 'SWITCHACCOUNT': 
          switchAccountReducer();
        break;
        case 'CREATEDIALOG':
          createDialogReducer();
        break;
        case 'SWITCHDIALOG':
          switchDialogReducer(action.currentDialog);
        break;
        case 'SENDMESSAGE':
          sendMessageReducer(action.messageData);
        break;
        default: 
        break;
      }
    }
}
export default store;