import React from 'react';
import store from '../Store';
import reRender from '../../render';
import { Redirect } from 'react-router';

let switchAccountReducer=()=>{
    store.currentUser='admin';
}
export default switchAccountReducer;