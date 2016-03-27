import React from 'react';
import { Link } from 'react-router';
import Container from '../../components/grid/Container.js';
import Row from '../../components/grid/Row.js';
import Column from '../../components/grid/Column.js';
import TechLabel from '../../components/TechLabel.js';

class WorkItem extends React.Component {

    renderStackTags() {
        let tags = [];

        this.props.stack.forEach( (tech) => {
            tags.push(
                <TechLabel type={tech}></TechLabel>
            );
        } );

        return tags;
    }
    render() {
        return (
            <div className="well well-lg">
                <Row>
                    <Column span="4">
                        <h2>
                            <Link to={this.props.link}>{this.props.title}</Link>
                        </h2>
                    </Column>
                </Row>
                <Row>
                    <Column span="12">
                        <div className="float-left">{this.renderStackTags()}</div>
                        <p className="lead">{this.props.description}</p>
                    </Column>
                </Row>
            </div>
        );
    }
}

WorkItem.defaultProps = {};

export default WorkItem;
