import React from 'react';
import store from '../Store';
import reRender from '../../render';
import { Redirect } from 'react-router';

let switchDialogReducer=(props)=>{
    store.users[store.currentUser].data.currentDialog=props;
    reRender();
}
export default switchDialogReducer;