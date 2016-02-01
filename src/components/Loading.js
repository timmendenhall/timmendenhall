import React, { PropTypes } from 'react';
import Glyph from './Glyph';

class LoadingComponent extends React.Component {
    render() {
        return (
            <Glyph type="repeat">
                {this.props.children}
            </Glyph>
        );
    }
}

LoadingComponent.propTypes = {};

export default LoadingComponent;
