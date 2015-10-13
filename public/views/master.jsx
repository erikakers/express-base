import React from 'react';

export default class Master extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <meta charSet='utf-8'/>
                    <title>
                        { this.props.title }
                    </title>
                </head>
                <body>
                    { this.props.children }
                </body>
                <script src='/bundle.js'></script>
            </html>
        );
    }
}
