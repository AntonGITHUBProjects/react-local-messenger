import React from 'react';
import { NavLink,Redirect } from 'react-router-dom';
import Authorizationcss from  './Authorization.module.css';

function Authorization(props) {
  let AUTHORIZATION={
    type:'AUTHORIZATION'
  }
  console.log(props.dataToCheck);
  let loginRef = React.createRef();
  let passwordRef = React.createRef();

  let checkStoreDataLogin=()=>{
    let loginText = loginRef.current.value;  
    props.dataToCheck.login=loginText;
  }

  let checkStoreDataPassword=()=>{
    let passwordText = passwordRef.current.value;
    props.dataToCheck.password=passwordText;
  }
  let authorizationUsers=(e)=>{
    props.action(AUTHORIZATION);
  }
  return (
    <div className={Authorizationcss.Authorization}>
      <form action="">
      <h3>Авторизация</h3>
        <label htmlFor="login">Логин:</label>
        <br/>
        <input type="text" name="login" ref={loginRef} 
        onChange={checkStoreDataLogin}></input>
        <br/>
        <label htmlFor="password">Пароль:</label>
        <br/>
        <input type="password" name="password" ref={passwordRef} 
        onChange={checkStoreDataPassword}></input>
        <br/>
        <NavLink  to="/main"><input type="submit" value="Отправить" 
        onClick={authorizationUsers}/></NavLink>
        <br/>
        <div className={Authorizationcss.Links}>
       <NavLink to='/registration'>Регистрация</NavLink>
        </div>

      </form>
      
    </div>
  );
}

export default Authorization;
