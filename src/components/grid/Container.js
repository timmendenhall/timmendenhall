import React from 'react';

class ContainerComponent extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

ContainerComponent.defaultProps = {};

export default ContainerComponent;
