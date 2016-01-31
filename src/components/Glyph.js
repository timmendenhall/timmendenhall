import React, { PropTypes } from 'react';

class GlyphComponent extends React.Component {
    render() {
        const { type } = this.props;

        return (
            <span className={`glyphicon glyphicon-${type}`} aria-hidden="true"></span>
        );
    }
}

GlyphComponent.defaultProps = {
    type: PropTypes.string.isRequired
};

export default GlyphComponent;
