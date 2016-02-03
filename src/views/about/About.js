import React from 'react';

class AboutComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Full-stack web developer</h1>
                <p className="lead">Javascript centric full stack web engineer that dabbles in indie video game development.</p>
                <p className="lead">Currently I'm creating a React SPA at work, making a real time online strategy game that runs in a browser and developing light weight software to manage the blog here.</p>
            </div>
        );
    }
}

AboutComponent.defaultProps = {};

export default AboutComponent;
