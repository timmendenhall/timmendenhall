import React from 'react';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Tim Mendenhall</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#about">Blog</a></li>
                                <li><a href="#about">Work</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container">

                    <div className="starter-template">
                        <h1>Full stack web engineer</h1>
                        <p className="lead">Javascript centric full stack web engineer that dabbles in indie video game development.</p>
                    </div>

                </div>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
