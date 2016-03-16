import React from 'react';
import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';
import Container from '../../components/grid/Container';
import ResumeDoc from '../../documents/Resume_Tim_Mendenhall.docx';
import ResumePdf from '../../documents/Resume_Tim_Mendenhall.pdf';
import Glyph from '../../components/Glyph';

class ContactComponent extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h3>Whether you're a novice programmer, fellow technology enthusiast, or hiring manager, I'd love to hear from you!</h3>
                <br/>
                <p className="lead">Send me an email.</p>
                <Container>
                  <Row>
                    <Column span="12">
                      <a href="mailto:timmendenhall@gmail.com" className="btn btn-lg btn-default"><Glyph type="envelope"/> Email</a>
                    </Column>
                  </Row>
                </Container>
                <br/>
                <br/>
                <p className="lead">Download my résumé.</p>
                <Container>
                    <Row>
                        <Column span="6">
                            <a href={ResumePdf} className="btn btn-lg btn-danger pull-right"><Glyph type="download-alt"/> PDF</a>
                        </Column>
                        <Column span="6">
                            <a href={ResumeDoc} className="btn btn-lg btn-primary pull-left"><Glyph type="file"/> Word</a>
                        </Column>
                    </Row>
                </Container>
                <br/>
                <br/>
                <p className="lead">Check out my open source code.</p>
                <Container>
                  <Row>
                    <Column span="12">
                      <a href="https://github.com/ultimatetimmah" className="btn btn-lg btn-default"><Glyph type="globe"/> Github</a>
                    </Column>
                  </Row>
                </Container>
            </div>
        );
    }
}

ContactComponent.defaultProps = {};

export default ContactComponent;
