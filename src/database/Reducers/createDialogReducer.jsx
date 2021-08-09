import React from 'react';
import store from '../Store';
import reRender from '../../render';
let createDialogReducer=()=>{
    let have=false;
    for(let i=1;i<store.users[store.currentUser].dialogs.length;i++){
      if(i%2==1){
        for(let j=0;j<store.users[store.currentUser].dialogs[i].length;j++){
          if(store.users[store.currentUser].dialogs[i][j].user
            ==store.dataToCheck.currentFriend){
              have = true;
              break;
            }
        }
      }
    }
    //store.users[store.currentUser].dialogs[i+1].login==store.dataToCheck.currentFriend
    if(have!==true){
      store.users[store.currentUser].data.idDialog+=1;
      store.users[store.dataToCheck.currentDialogFriend].data.idDialog+=1;
      let dialogName1=['dialog'+store.users[store.currentUser].data.idDialog,
      store.users[store.currentUser].data.idDialog];
      let dialogName2=['dialog'+store.users[store.dataToCheck.currentDialogFriend].data.idDialog,
      store.users[store.dataToCheck.currentDialogFriend].data.idDialog];
      let dialog=[ 
              {
                  user:store.currentUser,
                  name:store.users[store.currentUser].data.name,
                  logo:store.users[store.currentUser].data.avatar,
                  message:{
                    text:'Сообщение1',
                    date:'10.10.2021'
                  }
                },
                {
                  user:store.dataToCheck.currentDialogFriend,
                  name:store.users[store.dataToCheck.currentDialogFriend].data.name,
                  logo:store.users[store.dataToCheck.currentDialogFriend].data.avatar,
                  message:{
                    text:'Сообщение3',
                    date:'12.10.2021'
                  }
                }
              ]
          store.users[store.currentUser].dialogs.push(dialogName1);
          store.users[store.currentUser].dialogs.push(dialog);
          store.users[store.dataToCheck.currentDialogFriend].dialogs.push(dialogName2);
          store.users[store.dataToCheck.currentDialogFriend].dialogs.push(dialog);
          console.log(store.users[store.currentUser].dialogs);
          reRender();
    }
    
}
export default createDialogReducer;