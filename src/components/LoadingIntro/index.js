import React from 'react';

import logo from 'assets/img/logo.png';
import './styles.scss';


function LoadingIntro({className}) {
  return (
    <div className={`loaderWrapper ${className}`}>
        <img src={logo} className="myAnimations"/>
    </div>
  );
}

export default LoadingIntro;
