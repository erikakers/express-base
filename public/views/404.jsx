import React from 'react';

import Master from './master.jsx';

export default class NotFound extends React.Component {

    render() {
        return (
            <Master {...this.props}>
                <h3>URL: { this.props.url } - Not Found(404)</h3>
                <h6>I am a Plain vanilla react view</h6>
            </Master>
        );
    }
}
