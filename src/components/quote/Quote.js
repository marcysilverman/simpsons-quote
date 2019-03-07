import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import styles from './quote.css';

function Quote({ quote, name, image, loading, fetch }) {
  return (
    <>
    {loading ? <h1 className={styles.homeTitle}>Donuts...Yum<img className={styles.image} src='../../../assets/loader.png'/></h1> : 
    <div>
      <h1 className={styles.homeName}> {name} </h1>
      <h1 className={styles.homeQuote}> {quote} </h1>
      <img className={styles.homeImage} src={image}/>
      <Loader fetch={fetch} /> 
    </div>}
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

