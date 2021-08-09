import React from 'react';
import store from '../Store';
import reRender from '../../render';

let searchReducer=()=>{
    
    let searchText=store.dataToCheck.searchText;
    let users=Object.keys(store.users);
    let usersTotal=Object.keys(store.users).length;
    let friendList;
    for(let i=0;i<usersTotal;i++){
        if(store.users[users[i]].data.login==searchText){
            store.dataToCheck.currentFriend=users[i];
        }
    }
    reRender();
    
}
export default searchReducer;