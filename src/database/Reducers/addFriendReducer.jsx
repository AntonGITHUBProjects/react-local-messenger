import React from 'react';
import store from '../Store';
import reRender from '../../render';

let addFriendReducer=()=>{
    //Добавление в друзья данному пользователю
    let friend ={
        name:store.users[store.dataToCheck.currentFriend].data.name,
        login: store.dataToCheck.currentFriend,
        image: store.users[store.dataToCheck.currentFriend].data.avatar
    }
    let have=false;
    for(let i=0;i<store.users[store.currentUser].friends.length;i++){
        if(store.users[store.currentUser].friends[i].login==
            store.dataToCheck.currentFriend){
          have=true;  
        }
    }
    if(have==false){
        store.users[store.currentUser].friends.push(friend);
    }
    //Добавление в друзья другу
    let friendUser ={
        name:store.users[store.currentUser].data.name,
        login: store.currentUser,
        image: store.users[store.currentUser].data.avatar
    }
    let haveUser=false;
    for(let i=0;i<store.users[store.dataToCheck.currentFriend].friends.length;i++){
        if(store.users[store.dataToCheck.currentFriend].friends[i].login==
            store.currentUser){
          haveUser=true;  
        }
    }
    if(haveUser==false){
        store.users[store.dataToCheck.currentFriend].friends.push(friendUser);
    }
    reRender();
}

export default addFriendReducer;