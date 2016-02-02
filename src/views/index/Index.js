import React from 'react';
import { Link } from 'react-router';
import Container from '../../components/grid/Container';
import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';
import Glyph from '../../components/Glyph';

class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <Container>
                    <Row>
                        <Column span="12">
                            <div className="jumbotron">
                                <h1>Full Stack Developer</h1>
                                <p className="lead">I'm a full stack web developer with a passion for technology.</p>
                                <p className="lead">Catch up on how I'm using new frameworks and languages on my <Link to="/blog">blog</Link>.  Or view some of my past work:</p>
                                <p><Link to="/work" className="btn btn-lg btn-success" role="button">View Example Work  <Glyph type="share-alt"/></Link></p>
                            </div>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

HomeComponent.defaultProps = {};

export default HomeComponent;
