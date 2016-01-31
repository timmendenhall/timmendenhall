import React from 'react';
import { Link } from 'react-router';

class BlogComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <Link to="/blog/test">Example Post</Link>
            </div>
        );
    }
}

BlogComponent.defaultProps = {};

export default BlogComponent;
