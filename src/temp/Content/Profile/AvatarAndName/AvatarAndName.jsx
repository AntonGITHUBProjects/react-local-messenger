import React from 'react';
import AvatarAndNamecss from './AvatarAndName.module.css';

function AvatarAndName(props) {
  return (
    <div className={AvatarAndNamecss.AvatarAndName}> 
        <img src={props.logo} className={AvatarAndNamecss.logo}/>
      <div className={AvatarAndNamecss.textname}>{props.name}</div>
    </div>
  );
}

export default AvatarAndName;
