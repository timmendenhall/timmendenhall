import React from 'react';
import { Link } from 'react-router';
import Container from '../../components/grid/Container.js';
import Row from '../../components/grid/Row.js';
import Column from '../../components/grid/Column.js';

class WorkItem extends React.Component {

    render() {
        return (
            <div className="well well-lg">
                <Row>
                    <Column span="4">
                        <Link to={this.props.link}>{this.props.title}</Link>
                    </Column>
                </Row>
                <Row>
                    <Column span="12">
                        <p className="lead">{this.props.description}</p>
                    </Column>
                </Row>
            </div>
        );
    }
}

WorkItem.defaultProps = {};

export default WorkItem;
