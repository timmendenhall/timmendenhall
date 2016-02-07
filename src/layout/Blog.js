import React from 'react';
import Container from '../components/grid/Container';
import Row from '../components/grid/Row';
import Column from '../components/grid/Column';
import Search from '../components/Search';

class BlogLayout extends React.Component {

    onClickSearch(e) {

    }

    render() {
        return (
            <Row>
                <Column medium="8">
                    {this.props.children}
                </Column>
                <Column medium="4">
                    <div className="well">
                        <h3>Search Blog</h3>
                        <Search onClick={this.onClickSearch.bind(this)}/>
                    </div>
                    <div className="well">
                        <h3>About</h3>
                        <p>Keeping up with technology comes with it's own quirks.</p>
                        <p>Read about how I've conquered various technologies and let us learn a thing or two along the way.</p>
                    </div>
                </Column>
            </Row>
        )
    }
}

BlogLayout.defaultProps = {};

export default BlogLayout;
