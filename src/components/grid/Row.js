import React from 'react';

class RowComponent extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}

RowComponent.defaultProps = {};

export default RowComponent;
