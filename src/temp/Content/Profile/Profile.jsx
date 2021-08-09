import React from 'react';
import Profilecss from './Profile.module.css';
import AvatarAndName from './AvatarAndName/AvatarAndName';
import Friends from './Friends/Friends'

function Profile(props) {
  return (
    <div className={Profilecss.Profile}>
      <AvatarAndName name={props.name} logo={props.logo}/>
      <Friends friends={props.friendlist}/>
    </div>
  );
}

export default Profile;
