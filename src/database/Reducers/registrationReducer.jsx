import React from 'react';
import store from '../Store';

let registrationReducer=()=>{
    let checkUser=true;
    for(let i=0;i<Object.keys(store.users).length;i++){
      if(Object.keys(store.users)==store.dataToAppend.login){
        checkUser=false;
        break;
      }
     }
     if(checkUser){
      let userName='user'+store.dataToAppend.id;
      let user={
            data:{
              name:store.dataToAppend.name,
              login:store.dataToAppend.login,
              password:store.dataToAppend.password,
              avatar:store.dataToAppend.url,
              id:store.dataToAppend.id,
              idDialog:-1,
              currentDialog:0
            },
            friends : [
            ],
            dialogs:[
            
            ]
    }
    store.users[userName]=user;
    alert("Пользователь зарегистрирован!");
  }
  else{
    alert('Пользователь с таким логином уже зарегестрирован!')
  }
    
}
export default registrationReducer;