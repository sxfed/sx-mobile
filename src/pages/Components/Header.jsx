import React from 'react';
import {NavBar} from 'antd-mobile';
import {browserHistory} from 'react-router';
import {getLocationQuerySession} from '../../utils/location';

/**
 * header 组件
 */
export default props => {
    const hVisible = getLocationQuerySession('hVisible');

    const iframe = document.createElement('iframe');
    document.title = props.title;
    iframe.style.visibility = 'hidden';
    iframe.style.width = '1px';
    iframe.style.height = '1px';
    iframe.onload = () => {
        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 0);
    };
    document.body.appendChild(iframe);

    // 判断是否添加返回事件
    const onLeftClick = (props.iconName !== null || props.iconName !== false) ? {onLeftClick: browserHistory.goBack} : {};

    return (
        hVisible === '0' ? null : <NavBar {...props} {...onLeftClick} />
    );
};
