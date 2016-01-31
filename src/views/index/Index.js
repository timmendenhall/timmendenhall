import React from 'react';
import Container from '../../components/grid/Container';
import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';

class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Column span="8">
                            Span 8
                        </Column>
                        <Column span="4">
                            Span 4
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

HomeComponent.defaultProps = {};

export default HomeComponent;
