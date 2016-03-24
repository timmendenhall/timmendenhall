import React from 'react';
import Container from '../components/grid/Container';

class WorkLayout extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

WorkLayout.defaultProps = {};

export default WorkLayout;
