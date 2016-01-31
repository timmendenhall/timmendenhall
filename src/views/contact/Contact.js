import React from 'react';

class ContactComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Contact</h1>
                <p className="lead">Javascript centric full stack web engineer that dabbles in indie video game development.</p>
            </div>
        );
    }
}

ContactComponent.defaultProps = {};

export default ContactComponent;
