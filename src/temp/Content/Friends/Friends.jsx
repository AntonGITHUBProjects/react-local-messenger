import React from 'react';
import FriendSearch from './Friend/FriendSearch/Friend';
import Friend from './Friend/Friend/Friend';
import Friendscss from './Friends.module.css';

function Friends(props) {
const SEARCHFRIENDS = {
    type:'SEARCHFRIENDS'
}
const ADDFRIENDS = {
    type:'ADDFRIENDS'
}
let searchList=()=>{
  return(<FriendSearch name={props.friendSearch.data.name} 
  logo={props.friendSearch.data.avatar}/>);
}
let friendList=()=>{
  return(props.friends.map(
   friend=><Friend name={friend.name} logo={friend.image} 
   dialogButton={true} action={props.action} login={friend.login}
   dataToCheck={props.dataToCheck}/>));
}
let currentFriend=()=>{
  if(props.dataToCheck.currentFriend!==props.currentUser){
    return(
      <button className={Friendscss.AddFriend} onClick={addFriend}>Добавить в друзья</button>
    );
  }
}
let searchRef=React.createRef();
let changeStore=()=>{
  let friendsText=searchRef.current.value;
  props.dataToCheck.searchText=friendsText;
}
let friendsSearchSubmitForm=(e)=>{
  props.action(SEARCHFRIENDS);
  e.preventDefault();
}
let addFriend=(e)=>{
  props.action(ADDFRIENDS);
  e.preventDefault();
}
  return (
    <div className={Friendscss.Friends}>
      
      <form action="">
        <label>Поиск друзей:</label>
        <input type="text" className={Friendscss.SearchInput}
        onChange={changeStore} ref={searchRef}/>
        <input type="submit" onClick={friendsSearchSubmitForm} 
        className={Friendscss.SubmitForm}/>
      </form>
      Результаты поиска
      <ul className={Friendscss.FriendsSearch}>
      {searchList()}
      {currentFriend()}
      </ul>
      Ваши друзья ({props.friends.length})
      <ul className={Friendscss.friendList}>
      {friendList()}
      </ul>
      
    </div>
  );
}

export default Friends;
