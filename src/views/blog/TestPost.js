import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import Glyph from '../../components/Glyph';
import moment from 'moment';

class TestPostComponent extends React.Component {
    componentDidMount() {
    }

    render() {

        const title = 'Node JS And You';
        const formattedCreated = moment(new Date('2016-02-03T00:57:19.489Z')).format('MMMM Do YYYY, h:mm:ss a');

        return (
            <div>
                <div>
                    <Link to="/blog" className="btn btn-primary"><Glyph type="menu-left"/> Back</Link>
                </div>
                <h1>{title}</h1>
                <strong><span>{formattedCreated}</span></strong>
                <div>
                    <h2>What's a Node Anyways?</h2>
                    <p>So what is Node.js anyways?  If you haven't heard of it by now, then you can think of it as a modular, non-blocking io, powerful framework for building web servers of any variety and size.  Also, the best part is it runs by reading your javascript code and even comes with a package manager (npm) with access to an unlimited number resources.  If you don't know what a package manager is don't sweat it, we'll learn more as we go.</p>
                    <h2>Installing Node</h2>
                    <p>Your options for installation will vary depending on which operating system you're running.  But, have no fear as the fine people of Joyent have some amazing installation instructions.</p>
                </div>
            </div>
        );
    }
}

TestPostComponent.propTypes = {
};

export default TestPostComponent;
