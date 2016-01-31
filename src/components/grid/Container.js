import React, { PropTypes } from 'react';

class ContainerComponent extends React.Component {
    render() {
        return (
            <div className={`container${this.props.fluid ? '-fluid' : ''}`}>
                {this.props.children}
            </div>
        );
    }
}

ContainerComponent.propTypes = {
    fluid: PropTypes.bool
};

export default ContainerComponent;
