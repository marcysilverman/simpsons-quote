import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, name, image }) {
  return (
    <>
    <h1> {quote} </h1>
    <h1> {name} </h1>
    <img src={image}/>
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;

