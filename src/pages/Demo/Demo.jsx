import React, {Component} from 'react';
import {WhiteSpace, Grid, Icon, Flex, Toast} from 'antd-mobile';

import PageView from '../../commons/pageView/PageView';
import Header from '../Components/Header';
import './style';

const gridData = [{
    title: 'Button 按钮',
    icon: require('!svg-sprite!svg/components.svg'),
    link: '/demo/Button',
}, {
    title: '敬请期待',
    icon: require('!svg-sprite!svg/components.svg'),
}, {
    title: '敬请期待',
    icon: require('!svg-sprite!svg/components.svg'),
}, {
    title: '敬请期待',
    icon: require('!svg-sprite!svg/components.svg'),
}, {
    title: '敬请期待',
    icon: require('!svg-sprite!svg/components.svg'),
}, {
    title: '敬请期待',
    icon: require('!svg-sprite!svg/components.svg'),
}];

export default class LayoutComponent extends Component {
    state = {}

    handleLinkClick = item => {
        if (item.link) {
            this.props.router.push(item.link);
        } else {
            Toast.info('敬请期待...', 1);
        }
    }

    render() {
        return (
            <PageView>
                <Header iconName={null} title="Demo">Demo</Header>
                <WhiteSpace size="lg" />
                <Grid
                    data={gridData}
                    renderItem={item => (
                        <Flex
                            direction="column"
                            justify="center"
                            align="center"
                            style={{height: '100%'}}
                        >
                            <Icon type={item.icon} color="#999" />
                            <WhiteSpace />
                            <p style={{margin: 0, fontSize: '0.25rem'}}>{item.title}</p>
                        </Flex>
                    )}
                    onClick={this.handleLinkClick}
                />
                <WhiteSpace />
                <p className="demo-link">页面组件主要基于
                    <a className="link" href="https://mobile.ant.design"> antd-mobile</a> 开发
                </p>
            </PageView>
        );
    }
}
