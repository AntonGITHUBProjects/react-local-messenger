import React from 'react';
import { NavLink } from 'react-router-dom';
import PersonalCabinetcss from'./PersonalCabinet.module.css';

function PersonalCabinet(props) {
  let SWITCHACCOUNT = {
    type:'SWITCHACCOUNT'
  }
  let switchAccount=()=>{
    props.action(SWITCHACCOUNT);
  }
  return (
    <div className={PersonalCabinetcss.PersonalCabinet}>
      <NavLink to="/main/profile">
        <img src={props.logo} className={PersonalCabinetcss.img}/>
      </NavLink>
      <NavLink to="../authorization">
        <i className="fa fa-cog" aria-hidden="true"
         onClick={switchAccount}></i>
      </NavLink> 
      <div className={PersonalCabinetcss.LoginName}>{props.name}</div>
      
    </div>
  );
}

export default PersonalCabinet;
