'use strict';

import React from 'react';

import Layout from './layout.jsx';

export default class NotFound extends React.Component {

  render() {
    return (
      <Layout {...this.props}>
        <h3>URL: {this.props.url} - Not Found(404)</h3>
        <h6>I am a Plain vanilla react view</h6>
      </Layout>
    );
  }
}
