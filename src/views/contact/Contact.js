import React from 'react';
import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';
import Container from '../../components/grid/Container';

class ContactComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <p className="lead">If you're a human, send me an email.</p>
                <h2>timmendenhall [at] gmail [dot] com</h2>
                <br/>
                <p className="lead">If you're hiring, download my résumé.</p>
                <Container>
                    <Row>
                        <Column span="6">
                            <button className="btn-lg btn-success">PDF</button>
                        </Column>
                        <Column span="6">
                            <button className="btn-lg btn-primary">Word</button>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

ContactComponent.defaultProps = {};

export default ContactComponent;
