import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import styles from './quote.css';
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const fade = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

function Quote({ quote, name, image, loading, fetch }) {
  return (
    <>
    <StyleRoot>
    {loading ? <h1 className={styles.homeTitle}>Donuts...Yum<img className={styles.image} src='https://ih0.redbubble.net/image.232274915.1078/sticker,375x360-bg,ffffff.u6.png'/></h1> : 
    <div style={fade.fadeIn}>
      <h1 className={styles.homeName}> {name} </h1>
      <h1 className={styles.homeQuote}> {quote} </h1>
      <img className={styles.homeImage} src={image}/>
      <Loader fetch={fetch} /> 
    </div>}
    </StyleRoot>
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Quote;

