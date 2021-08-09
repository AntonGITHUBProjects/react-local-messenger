import React from 'react';
import { NavLink } from 'react-router-dom';
import Registrationcss from  './Registration.module.css';

let CREATEACCOUNT ={
  type:'CREATEACCOUNT'
}

let INRCEASEID={
  type:'INRCEASEID'
}



function Registration(props) {

  let nameRef = React.createRef();
  let loginRef = React.createRef();
  let passwordRef = React.createRef();
  let imageRef=React.createRef();



  let registrationUser=(e)=>{
    e.preventDefault();
    if(props.dataToAppend.login!=='' 
    && props.dataToAppend.name!==''
    && imageRef.current.files[0]!==undefined){
      let addImage=()=>{
        let photo=URL.createObjectURL(imageRef.current.files[0]);
          if(photo){
            props.dataToAppend.url=photo;
          }
      }
      addImage();
      props.action(INRCEASEID);
      props.action(CREATEACCOUNT);
    }
    else{
      alert("Введите все данные!")
    }
 
  }
  let updateStoreDataName=()=>{
  let nameText = nameRef.current.value;
  props.dataToAppend.name=nameText;
  }

  let updateStoreDataLogin=()=>{
    let loginText = loginRef.current.value;  
    props.dataToAppend.login=loginText;
  }

  let updateStoreDataPassword=()=>{
    let passwordText = passwordRef.current.value;
    props.dataToAppend.password=passwordText;
  }


  return (
    <div className={Registrationcss.Registration} id="registaion">
      <form action="">
        <h3>Регистрация</h3>
        <label htmlFor="name">Имя:</label>
        <br/>
        <input type="text" name="name" ref={nameRef} 
        onChange={updateStoreDataName}></input>
        <br/>
        <label htmlFor="login" >Логин:</label>
        <br/>
        <input type="text" name="login" ref={loginRef} 
        onChange={updateStoreDataLogin}></input>
        <br/>
        <label htmlFor="password">Пароль:</label>
        <br/>
        <input type="password" name="password" ref={passwordRef} 
        onChange={updateStoreDataPassword}></input>
        <br/>
        <label htmlFor="photo">Загрузить картинку профиля:</label>
        <br/>
        <input type="file" name="photo" ref={imageRef} accept="image/jpeg,image/png"/>
        <br/>        
        <input type="submit" value="Отправить" onClick={registrationUser}/>
        <img id="image1"/>
        <br/>
        <div className={Registrationcss.Links}>
       <NavLink to='/authorization'>Авторизация</NavLink>
       </div>
      </form>
    </div>
  );
}

export default Registration;
