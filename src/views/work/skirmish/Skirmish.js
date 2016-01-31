import React from 'react';
import skirmishScreenshot from '../../../images/skirmish-screen-shot.png';

class SkirmishComponent extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Skirmish</h1>
                <img src={skirmishScreenshot}/>
                <p className="lead">
                    <a href="http://www.skirmishonline.com">Website</a>
                </p>
                <p className="lead">In Development, Alpha, Playable, Online</p>
                <p className="lead">Technologies: Three JS, socket.io, mongo DB</p>
            </div>
        );
    }
}

SkirmishComponent.defaultProps = {};

export default SkirmishComponent;