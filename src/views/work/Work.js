import React from 'react';
import skirmishScreenshot from '../../images/skirmish-screen-shot.png';
import { Link } from 'react-router'

class WorkComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <p className="lead">
                    <Link to="/work/skirmish"><img src={skirmishScreenshot}/></Link>
                </p>
            </div>
        );
    }
}

WorkComponent.defaultProps = {};

export default WorkComponent;
