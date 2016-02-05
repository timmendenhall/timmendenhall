import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Glyph from '../../components/Glyph';
import moment from 'moment';

class PostPreviewComponent extends React.Component {
    render() {
        const { post } = this.props;
        const formattedCreated = moment(post.created).format('MMMM Do YYYY, h:mm:ss a');

        return (
            <div className="well">
                <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
                <div><Glyph type="time"></Glyph> Posted on {formattedCreated}</div>
                <hr/>
                <div className="lead">{post.description}</div>
            </div>
        );
    }
}

PostPreviewComponent.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostPreviewComponent;
