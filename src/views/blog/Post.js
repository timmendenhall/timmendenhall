import React from 'react';
import {Link} from 'react-router';
import Glyph from '../../components/Glyph';

class PostComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/blog" className="btn btn-primary"><Glyph type="menu-left"/> Back</Link>
                </div>
                <h1>Some sort of title</h1>
                <strong><span>January 31st, 2016</span></strong>
                <p></p>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a efficitur velit, sed rhoncus orci. Aliquam vitae iaculis orci. Morbi sed neque quis quam porttitor pellentesque. Aliquam aliquet tristique lorem, quis euismod dui porttitor vitae. Duis gravida ipsum ut augue tempus elementum. Maecenas sit amet sagittis odio. Nam laoreet in dui quis congue. Vivamus feugiat bibendum faucibus. Duis volutpat risus quis diam blandit suscipit. Aliquam quis quam a augue semper vestibulum. Curabitur ornare ornare leo.</p>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a efficitur velit, sed rhoncus orci. Aliquam vitae iaculis orci. Morbi sed neque quis quam porttitor pellentesque. Aliquam aliquet tristique lorem, quis euismod dui porttitor vitae. Duis gravida ipsum ut augue tempus elementum. Maecenas sit amet sagittis odio. Nam laoreet in dui quis congue. Vivamus feugiat bibendum faucibus. Duis volutpat risus quis diam blandit suscipit. Aliquam quis quam a augue semper vestibulum. Curabitur ornare ornare leo.</p>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a efficitur velit, sed rhoncus orci. Aliquam vitae iaculis orci. Morbi sed neque quis quam porttitor pellentesque. Aliquam aliquet tristique lorem, quis euismod dui porttitor vitae. Duis gravida ipsum ut augue tempus elementum. Maecenas sit amet sagittis odio. Nam laoreet in dui quis congue. Vivamus feugiat bibendum faucibus. Duis volutpat risus quis diam blandit suscipit. Aliquam quis quam a augue semper vestibulum. Curabitur ornare ornare leo.</p>
            </div>
        );
    }
}

PostComponent.defaultProps = {};

export default PostComponent;
