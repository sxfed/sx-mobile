import React, { Component } from 'react';

import './style.less';

/**
 * 页面容器样式
 * @type {Object}
 */
const pageViewStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
};

export default class PageView extends Component {
    state = {}

    render() {
        return (
            <div style={pageViewStyle} {...this.props} />
        );
    }
}
