import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const WithFetch = Component => {
  class WithFetch extends PureComponent {
    
    static propTypes =  {
      fetch: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      return (
        <>
          { this.props.loading ? <h1> Loading </h1> : <Component {...this.props} /> }
        </>
      );
    }
  }
  return WithFetch;
}