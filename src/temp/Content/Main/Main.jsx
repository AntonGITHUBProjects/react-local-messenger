import React from 'react';
import maincss from './Main.module.css';

function Main(props) {
  return (
    <div className={maincss.Content}>
     <img src="../media/images/logo.png" alt="" width="300" height="300"/>
     <p>Приветствую вас в моём проекте!</p>
    </div>

  );
}

export default Main;
