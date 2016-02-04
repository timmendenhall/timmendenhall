import React from 'react';

class NotFoundComponent extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1>404</h1>
                <p className="lead">Whoops.</p>
            </div>
        );
    }
}

NotFoundComponent.defaultProps = {};

export default NotFoundComponent;
