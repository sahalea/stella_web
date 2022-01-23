import React from 'react';
import ImgMain from '../assets/images/img-logo-main.svg';
import ImgSub from '../assets/images/img-logo-sub.svg';

const Logo = (props) => (
  <span className="app-logo">
    <img
      src={ImgSub}
      className="img-one img-fluid"
      style={{ width: props.width, height: props.height }}
      alt="logo"
    />
    <img
      src={ImgMain}
      className="img-two img-fluid"
      style={{ width: props.width, height: props.height }}
      alt="logo"
    />
  </span>
);

export default Logo;
