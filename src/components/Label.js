import React, {PropTypes} from 'react';

class Label extends React.Component {

    render() {

        let classes = [
            'label',
            `label-${this.props.type}`,
            this.props.className
        ];
        
        return (
            <span className={classes.join(' ')}>{this.props.children}</span>
        );
    }
}

Label.defaultProps = {
    type: 'default'
};

Label.propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger'])
};

export default Label;
