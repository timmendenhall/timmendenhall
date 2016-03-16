import React from 'react';
import { IndexLink, Link } from 'react-router'
import Glyph from './Glyph';
import Container from './grid/Container';

class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <Container>
                    <div className="navbar-header">
                        <IndexLink to="/" className="navbar-brand">Tim Mendenhall</IndexLink>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/blog" activeClassName="active">Blog</Link></li>
                            <li><Link to="/work" activeClassName="active">Work</Link></li>
                            <li><Link to="/about" activeClassName="active">About</Link></li>
                            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                        </ul>
                    </div>
                </Container>
            </nav>
        );
    }
}

HeaderComponent.defaultProps = {};

export default HeaderComponent;
