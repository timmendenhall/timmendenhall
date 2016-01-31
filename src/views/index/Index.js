import React from 'react';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Web Developer</h1>
                <p className="lead"></p>
            </div>
        );
    }
}

HomeComponent.defaultProps = {};

export default HomeComponent;
