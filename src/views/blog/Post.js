import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import Glyph from '../../components/Glyph';
import moment from 'moment';

class PostComponent extends React.Component {
    componentDidMount() {
        const { fetchPostIfNeeded } = this.props;
        const { id } = this.props.params;

        fetchPostIfNeeded(id);
    }

    render() {
        const post = this.props.blog.selected;
        const formattedCreated = moment(post.created).format('MMMM Do YYYY, h:mm:ss a');

        let formattedModified;

        if (post.lastModified) {
            formattedModified = moment(post.lastModified).format('MMMM Do YYYY, h:mm:ss a');
        }

        return (
            <div>
                <div>
                    <Link to="/blog" className="btn btn-primary"><Glyph type="menu-left"/> Back</Link>
                </div>
                <h1>{post.title}</h1>
                <p><strong>Created {formattedCreated}</strong></p>
                { formattedModified &&
                    <p><em>Last modified on {formattedModified}</em></p>
                }
                <div dangerouslySetInnerHTML={{__html: post.body}}>
                </div>
            </div>
        );
    }
}

PostComponent.propTypes = {
    blog: PropTypes.object.isRequired
};

export default PostComponent;
