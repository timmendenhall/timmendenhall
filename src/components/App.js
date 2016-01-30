require('normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="index">
                <div className="notice">Tim Mendenhall Portfolio</div>
                <strong>Coming soon!</strong>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
