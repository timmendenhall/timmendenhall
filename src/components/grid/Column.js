import React, { PropTypes } from 'react';

class Column extends React.Component {
    render() {
        const { span, extrasmall, small, medium, large, offset } = this.props;

        let colClass = ``;

        if (span) {
            colClass = `col-xs-${span} col-sm-${span} col-md-${span} col-lg-${span}`;
        } else {
            if (extrasmall) {
                colClass += `col-xs-${extrasmall}`;
            }

            if (small) {
                colClass += ` col-sm-${small}`;
            }

            if (medium) {
                colClass += ` col-md-${medium}`;
            }

            if (large) {
                colClass += ` col-lg-${large}`;
            }
        }

        // todo: offsets
        //colClass = offset ? `${colClass} col-xs-offset-${span} col-sm-offset-${span} col-md-offset-${span} col-lg-offset-${span}` : colClass;

        return (
            <div className={colClass}>
                {this.props.children}
            </div>
        );
    }
}

Column.propTypes = {
    span: PropTypes.string,
    extrasmall: PropTypes.string,
    small: PropTypes.string,
    medium: PropTypes.string,
    large: PropTypes.string,
    offset: PropTypes.string
};

export default Column;
