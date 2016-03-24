import React from 'react';
import Row from '../../components/grid/Row';
import Column from '../../components/grid/Column';

class AboutComponent extends React.Component {
    render() {
        return (
            <Row>
                <Column span="12">
                    <div className="jumbotron text-center">
                        <h1>Full-stack web developer</h1>
                        <p className="lead">Javascript centric full stack web engineer that dabbles in indie video game development.</p>
                        <p className="lead">Currently I'm creating a React SPA at work, making a real time online strategy game that runs in a browser and developing light weight software to manage the blog here.</p>
                    </div>
                </Column>
            </Row>
       );
    }
}

AboutComponent.defaultProps = {};

export default AboutComponent;
