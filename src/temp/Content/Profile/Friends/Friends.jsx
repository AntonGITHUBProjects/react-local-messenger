import React from 'react';
import Friendscss from './Friends.module.css';
import Friend from './Friend/Friend'


function Friends(props) {
  let friendList=()=>{
    return(props.friends.map(
     dialog=><Friend name={dialog.name} logo={dialog.image}/>));
 }
  return (
    <div className={Friendscss.Friends}>
      Друзья ({props.friends.length})
      <ul className={Friendscss.friendList}>
       {friendList()}
      </ul>
      
    </div>
  );
}

export default Friends;
