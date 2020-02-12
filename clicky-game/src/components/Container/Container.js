import React from 'react';
import './Container.css';
import Flower from '../Flower';

// main container for each Flower component
// loops through each index in props.flowers, which contains an array of flower images
// to create a new Flower component for each image
// attaches the passed down clickEvent function to each Flower component
const Container = props => (
  // loops through
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  >
    {props.flowers.map((a, i) => <Flower name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Container;