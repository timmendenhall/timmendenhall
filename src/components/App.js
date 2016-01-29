require('normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
    render() {
        return (
            <div className="index">
                <img src={yeomanImage} />
                <div className="notice">Tim Mendenhall Portfolio</div>
                <strong>Coming Sooner</strong>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
