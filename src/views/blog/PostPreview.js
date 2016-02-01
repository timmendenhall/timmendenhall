import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Glyph from '../../components/Glyph';

class PostPreviewComponent extends React.Component {
    render() {
        const { post } = this.props;
        const formattedCreated = new Date(post.created).toDateString();

        return (
            <div className="well-lg">
                <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
                <strong><span>{formattedCreated}</span></strong>
                <div dangerouslySetInnerHTML={{__html: post.body}}>
                </div>
            </div>
        );
    }
}

PostPreviewComponent.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostPreviewComponent;
