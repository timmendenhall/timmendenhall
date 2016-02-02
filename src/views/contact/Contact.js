import React from 'react';
import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';
import Container from '../../components/grid/Container';
import ResumeDoc from '../../documents/Resume_Tim_Mendenhall.docx';
import ResumePdf from '../../documents/Resume_Tim_Mendenhall.pdf';

class ContactComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <p className="lead">If you're a human, send me an email.</p>
                <h2>timmendenhall [at] gmail [dot] com</h2>
                <br/>
                <p className="lead">Download my résumé.</p>
                <Container>
                    <Row>
                        <Column span="6">
                            <a href={ResumePdf} className="btn-lg btn-success">PDF</a>
                        </Column>
                        <Column span="6">
                            <a href={ResumeDoc} className="btn-lg btn-primary">Word</a>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

ContactComponent.defaultProps = {};

export default ContactComponent;
