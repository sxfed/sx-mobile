import React, {Component} from 'react';
import {TabBar, Icon} from 'antd-mobile';

import Home from './Home/Home';
import Demo from './Demo/Demo';
import About from './About/About';

const tabList = [{
    title: 'Home',
    icon: require('!svg-sprite!svg/nav.svg'),
    component: Home,
    router: 'Home',
}, {
    title: 'Demo',
    icon: require('!svg-sprite!svg/menu.svg'),
    component: Demo,
    router: 'Demo',
}, {
    title: 'About',
    icon: require('!svg-sprite!svg/about.svg'),
    component: About,
    router: 'About',
}];

export const PAGE_ROUTE = '/tab/:path';

export class LayoutComponent extends Component {
    state = {}

    handleSelectClick = path => {
        const {router} = this.props;
        router.push(`/tab/${path}`);
    }

    render() {
        const {path} = this.props.router.params;

        return (
            <TabBar>
                {
                    tabList.map(tab => {
                        return (
                            <TabBar.Item
                                title={tab.title}
                                key={tab.title}
                                icon={
                                    <Icon type={tab.icon} />
                                }
                                selectedIcon={
                                    <Icon type={tab.icon} />
                                }
                                selected={path === tab.title}
                                onPress={() => {
                                    this.handleSelectClick(tab.router);
                                }}
                            >
                                <tab.component {...this.props} />
                            </TabBar.Item>
                        );
                    })
                }
            </TabBar>
        );
    }
}

export function mapStateToProps(state) {
    return {
        ...state,
    };
}
