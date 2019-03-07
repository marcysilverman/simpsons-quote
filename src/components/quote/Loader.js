import React from 'react';
import PropTypes from 'prop-types';
import { pulse } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import styles from './loader.css';

const animation = {
  pulse: {
    animation: 'x 1s',
    animationName: Radium.keyframes(pulse, 'pulse')
  }
}

function Loader({ fetch }) {
  return (
    <StyleRoot>
    <button className={styles.red} className={styles.push_button} onClick={fetch} style={animation.pulse}> Get Another Character </button>
    </StyleRoot>
  );
}

Loader.propTypes =  {
  fetch: PropTypes.func.isRequired
}

export default Loader;