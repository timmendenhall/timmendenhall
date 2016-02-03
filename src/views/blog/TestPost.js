import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import Glyph from '../../components/Glyph';
import moment from 'moment';

class TestPostComponent extends React.Component {
    componentDidMount() {
    }

    render() {

        const post = require('../../../routes/blog/node-js-and-you');
        const formattedCreated = moment(post.created).format('MMMM Do YYYY, h:mm:ss a');

        return (
            <div>
                <div>
                    <Link to="/blog" className="btn btn-primary"><Glyph type="menu-left"/> Back</Link>
                </div>
                <h1>{post.title}</h1>
                <strong><span>{formattedCreated}</span></strong>
                <div dangerouslySetInnerHTML={{__html: post.body}}>
                </div>
            </div>
        );
    }
}

TestPostComponent.propTypes = {
};

export default TestPostComponent;
