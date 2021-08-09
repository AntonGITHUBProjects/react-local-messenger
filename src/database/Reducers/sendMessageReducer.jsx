import React from 'react';
import store from '../Store';
import reRender from '../../render';

let sendMessageReducer=(data)=>{
    let message={};
    message={
        user:store.currentUser,
        name:store.users[store.currentUser].data.name,
        logo:store.users[store.currentUser].data.avatar,
        message:{
            text:data.text,
            date:data.date
        }
    }
    for(let i=0;i<store.users[store.currentUser].dialogs.length;i++){
        if(i%2==0){
            if(store.users[store.currentUser].dialogs[i][1]
                ==store.users[store.currentUser].data.currentDialog){
                    store.users[store.currentUser].dialogs[i+1].push(message);
                }
        }
    }
    message=       
    { user:'',
    name:'',
    logo:'',
    message:{
        text:'',
        date:''
    }
}
    reRender();   
}
export default sendMessageReducer;