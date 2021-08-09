import React from 'react';
import store from '../Store';

let authorizationReducer=()=>{
    let loginCheck=store.dataToCheck.login;
    let passwordCheck = store.dataToCheck.password;
    let users=Object.keys(store.users);
    let usersTotal=Object.keys(store.users).length;
    let currentUser;
    for(let i=0;i<usersTotal;i++){
        if(store.users[users[i]].data.login==loginCheck && store.users[users[i]].data.password==passwordCheck){
            store.currentUser=users[i];
            console.log(store.users[store.currentUser]);
        }
    }
    
}
export default authorizationReducer;