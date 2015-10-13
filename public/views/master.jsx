import React from 'react';

import Head from './partials/head.jsx';
import Footer from './partials/footer.jsx';

export default class Master extends React.Component {
    render() {
        return (
            <html>
                <Head {...this.props} />
                <body>
                    { this.props.children }
                </body>
                <Footer {...this.props} />
            </html>
        );
    }
}
