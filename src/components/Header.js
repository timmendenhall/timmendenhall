import React from 'react';
import { IndexLink, Link } from 'react-router'

class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <IndexLink to="/" className="navbar-brand"><span className="glyphicon glyphicon-cloud" aria-hidden="true"></span> Tim Mendenhall</IndexLink>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/blog" activeClassName="active">Blog</Link></li>
                            <li><Link to="/work" activeClassName="active">Work</Link></li>
                            <li><Link to="/about" activeClassName="active">About</Link></li>
                            <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

HeaderComponent.defaultProps = {};

export default HeaderComponent;
