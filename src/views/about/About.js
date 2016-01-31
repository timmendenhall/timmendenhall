import React from 'react';

class AboutComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Full stack web developer</h1>
                <p className="lead">Javascript centric full stack web engineer that dabbles in indie video game development.</p>
            </div>
        );
    }
}

AboutComponent.defaultProps = {};

export default AboutComponent;
