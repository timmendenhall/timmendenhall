import React from 'react';
import { Link } from 'react-router';
import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';

class BlogComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="well-lg">
                    <h2><Link to="/blog/test">Example Post</Link></h2>
                    <strong><span>January 31st, 2016</span></strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a efficitur velit, sed rhoncus orci. Aliquam vitae iaculis orci. Morbi sed neque quis quam porttitor pellentesque. Aliquam aliquet tristique lorem, quis euismod dui porttitor vitae. Duis gravida ipsum ut augue tempus elementum. Maecenas sit amet sagittis odio. Nam laoreet in dui quis congue. Vivamus feugiat bibendum faucibus. Duis volutpat ris ...</p>
                </div>


            </div>
        );
    }
}

BlogComponent.defaultProps = {};

export default BlogComponent;
