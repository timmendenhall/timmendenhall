import React from 'react';
import { Link } from 'react-router'

class HeaderComponent extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">Tim Mendenhall</Link>
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
