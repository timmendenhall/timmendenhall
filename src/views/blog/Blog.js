import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';
import PostPreview from './PostPreview';
import Loading from'../../components/Loading';

class BlogComponent extends React.Component {

    componentDidMount() {
        const { fetchPostsIfNeeded } = this.props;
        fetchPostsIfNeeded();
    }

    renderPosts() {
        const { blog } = this.props;

        let posts = [];

        blog.items.forEach( (post) => {
            posts.push(<PostPreview post={post} />);
        });

        return posts;
    }

    render() {
        const { blog } = this.props;

        return (
            <div>
                { blog.isFetching &&
                    <Loading/>
                }
                { !blog.isFetching &&
                    this.renderPosts()
                }
            </div>
        );
    }
}

BlogComponent.propTypes = {
    fetchPostsIfNeeded: PropTypes.func.isRequired
};

export default BlogComponent;
