'use strict';

import React from 'react';

export default class Home extends React.Component {

  render() {
    return (
      <div id='account'>
        <h1>{ this.props.name }</h1>
        <h3>{ this.props.title }</h3>
        <h6>I am a React Router rendered view</h6>
        <a href='/some_unknown'>Click to go to an unhandled route</a>
      </div>
    );
  }
}
