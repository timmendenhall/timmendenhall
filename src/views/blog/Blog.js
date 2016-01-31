import React from 'react';

class BlogComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Blog</h1>
                <p className="lead">Javascript centric full stack web engineer that dabbles in indie video game development.</p>
            </div>
        );
    }
}

BlogComponent.defaultProps = {};

export default BlogComponent;
