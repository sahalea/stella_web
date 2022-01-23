import React from 'react';
import { Image } from 'react-bootstrap';

const Icon = (props) => (
  <Image className={`icon icon-${props.name} img-fluid`} src={props.src} />
);

export default Icon;
