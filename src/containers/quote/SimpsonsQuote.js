import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import { getQuote, isLoading, getCharacterName, getCharacterImage } from '../../selector/simpson';
import { fetchQuotes } from '../../action/simpsons';


class SimpsonQuote extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <>
        { this.props.loading ? <h1> Loading </h1> : <Quote {...this.props} /> }
      </>
    );
  }
}

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
)(SimpsonQuote);
