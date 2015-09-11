import React from 'react';

export default class About extends React.Component {

  render() {
    return (
      <div id='account'>
        <h1>{ this.props.name }</h1>
        <h6>About View</h6>
        <a href='/some_unknown'>Click to go to an unhandled route</a>
      </div>
    );
  }
}
