import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Glyph from '../../components/Glyph';

class PostPreviewComponent extends React.Component {
    render() {
        const { post } = this.props;

        return (
            <div className="well-lg">
                <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
                <strong><span>{post.created}</span></strong>
                {post.body}
            </div>
        );
    }
}

PostPreviewComponent.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostPreviewComponent;
