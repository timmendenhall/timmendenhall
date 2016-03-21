import React from 'react';
import Container from '../components/grid/Container';

class WorkLayout extends React.Component {
    render() {
        return (
            <Container>
                {this.props.children}
            </Container>
        )
    }
}

WorkLayout.defaultProps = {};

export default WorkLayout;
