import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Blog from './Blog';
import * as actions from '../../redux/ducks/blog';

function mapStateToProps(state) {
    return {
        blog: state.blog
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)