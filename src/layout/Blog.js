import React from 'react';
import Container from '../components/grid/Container';
import Row from '../components/grid/Row';
import Column from '../components/grid/Column';

class BlogLayout extends React.Component {
    render() {
        return (
            <Row>
                <Column medium="8" extrasmall="12">
                    {this.props.children}
                </Column>
                <Column medium="4" extrasmall="12">
                    <div className="well">
                        <h3>About</h3>
                        <p>Keeping up with technology comes with it's own quirks.</p>
                        <p>Read about how I've conquered various technologies and let us learn a thing or two about all things development along the way.</p>
                    </div>
                </Column>
            </Row>
        )
    }
}

BlogLayout.defaultProps = {};

export default BlogLayout;
