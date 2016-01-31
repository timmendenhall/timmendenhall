import React from 'react';
import { IndexLink, Link } from 'react-router'
import Glyph from './Glyph';
import Container from './grid/Container';

class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <Container>
                    <div className="navbar-header">
                        <IndexLink to="/" className="navbar-brand"><Glyph type="cloud"/> Tim Mendenhall</IndexLink>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/blog" activeClassName="active"><Glyph type="list-alt"/> Blog</Link></li>
                            <li><Link to="/work" activeClassName="active"><Glyph type="briefcase"/> Work</Link></li>
                            <li><Link to="/about" activeClassName="active"><Glyph type="user"/> About</Link></li>
                            <li><Link to="/contact" activeClassName="active"><Glyph type="phone-alt"/> Contact</Link></li>
                        </ul>
                    </div>
                </Container>
            </nav>
        );
    }
}

HeaderComponent.defaultProps = {};

export default HeaderComponent;
