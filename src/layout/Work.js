import React from 'react';

class WorkLayout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

WorkLayout.defaultProps = {};

export default WorkLayout;
