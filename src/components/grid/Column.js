import React, { PropTypes } from 'react';

class ColumnComponent extends React.Component {
    render() {
        const { span, offset } = this.props;

        let colClass = `col-xs-${span} col-sm-${span} col-md-${span} col-lg-${span}`;
        colClass = offset ? `${colClass} col-xs-offset-${span} col-sm-offset-${span} col-md-offset-${span} col-lg-offset-${span}` : colClass;

        return (
            <div className={colClass}>
                {this.props.children}
            </div>
        );
    }
}

ColumnComponent.propTypes = {
    span: PropTypes.string.isRequired,
    offset: PropTypes.string
};

export default ColumnComponent;
