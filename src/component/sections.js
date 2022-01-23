import React from 'react';
import { Container } from 'react-bootstrap';

const Sections = (props) => (
  <section className={props.className}>
    {props.isContainer || props.isContainer === undefined ? (
      <Container>{props.children}</Container>
    ) : (
      props.children
    )}
  </section>
);

export default Sections;
