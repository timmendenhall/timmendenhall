import React, {PropTypes} from 'react';
import Label from './Label.js';

class TechLabel extends React.Component {

    getLabelType() {
        switch(this.props.type) {
            case 'react':
                return 'primary';
            case 'three':
                return 'warning';
            case 'mongodb':
            case 'node':
                return 'success';
            case 'socket':
                return 'info';
            case 'vim':
                return 'danger';

            case 'default':
            default:
                return 'default';
        }
    }

    getLabelText() {
        switch(this.props.type) {
            case 'react':
                return 'React';
            case 'node':
                return 'NodeJS';
            case 'three':
                return 'ThreeJS';
            case 'socket':
                return 'socket.io';
            case 'mongodb':
                return 'MongoDB';
            case 'default':
            default:
                return 'Default TechLabel';
        }
    }

    render() {
        let labelType = this.getLabelType();
        let labelText = this.getLabelText();

        // todo: Need to combine Label's class with tech-label from below by
        // spread operater on props etc
        return (
            <Label className="tech-label" type={labelType}>{labelText}</Label>
        );
    }
}

TechLabel.defaultProps = {
    type: 'default'
};

TechLabel.propTypes = {
    type: PropTypes.oneOf(['default', 'mongodb', 'react', 'node', 'socket', 'three', 'vim', 'web'])
};

export default TechLabel;
