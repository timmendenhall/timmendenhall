import React from 'react';
import WorkItem from './WorkItem';
import skirmishScreenshot from '../../images/skirmish-screen-shot.png';
import { Link } from 'react-router';
import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';

class Work extends React.Component {

    renderWorkItems() {
        let workItems = [];

        workItems.push(
            <WorkItem
                link="/work/skirmish"
                title="Skirmish"
                stack={['three', 'node', 'socket', 'react', 'mongodb']}
                description="A real time strategy game that runs in your browser!  The game was coded entirely with javascript and features 3D rendering with webGL, online multiplayer with socket.io and a backend in Mongo DB."/>
        );

        return workItems;
    }

    render() {
        return (
            <div>
                <Row>
                    <Column span="12">
                        {this.renderWorkItems()}
                    </Column>
                </Row>
            </div>
        );
    }
}

Work.defaultProps = {};

export default Work;
