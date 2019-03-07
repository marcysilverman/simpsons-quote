import React from 'react';
import PropTypes from 'prop-types';

function Loader({ fetch }) {
  return (
    <button onClick={fetch}> Get Another Quote </button>
  );
}

Loader.propTypes =  {
  fetch: PropTypes.func.isRequired
}

export default Loader;