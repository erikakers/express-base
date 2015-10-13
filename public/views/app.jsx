import React from 'react';
import Router from 'react-router';

import Master from './master.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Master {...this.props}>
                <Router.RouteHandler {...this.props}/>
            </Master>
        );
    }
}
