import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import { getQuote, isLoading, getCharacterName, getCharacterImage } from '../../selector/simpson';
import { fetchQuotes } from '../../action/simpsons';
import { WithFetch } from '../../components/WithFetch';

const mapStateToProps = (state) => ({
  quote: getQuote(state),
  name: getCharacterName(state),
  image: getCharacterImage(state),
  loading: isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch() {
    dispatch(fetchQuotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithFetch(Quote));
