import React from 'react';
import Header from './Header';

class AppComponent extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div className="container">

                    <div className="home">
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
