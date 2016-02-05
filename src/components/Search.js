import React, { PropTypes } from 'react';
import Glyph from './Glyph';

class SearchComponent extends React.Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..."/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.props.onClick}>
                        <Glyph type="search"/>
                    </button>
                </span>
            </div>
        );
    }
}

SearchComponent.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default SearchComponent;