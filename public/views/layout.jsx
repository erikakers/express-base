'use strict';

import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>
            {this.props.title}
          </title>
        </head>
        <body>
          {this.props.children}
        </body>
        <script src='/bundle.js'></script>
      </html>
    );
  }
}
