import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote }) {
  return (
    <>
    <h1> {quote} </h1>
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired
};

export default Quote;

