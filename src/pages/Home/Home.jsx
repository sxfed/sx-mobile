import React, {Component} from 'react';
import {List, Icon} from 'antd-mobile';

import PageView from '../../commons/pageView/PageView';
import Header from '../Components/Header';

export default class LayoutComponent extends Component {
    state = {}

    render() {
        const {router} = this.props;

        return (
            <PageView>
                <Header iconName={null} title="Home">Home</Header>
                <img src="/static/image/logo.png" alt="logo" style={{
                    width: '2.2rem',
                    margin: '1rem auto 0',
                }}/>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '0.5rem',
                    color: '#888',
                }}>sx-mobile v1.0</p>
                <List>
                    <List.Item
                        arrow="horizontal"
                        thumb={<Icon type={require('!svg-sprite!svg/menu.svg')} />}
                        onClick={() => {
                            router.push('/tab/Demo');
                        }}
                    >
                        Demo展示
                    </List.Item>
                    <List.Item
                        arrow="horizontal"
                        thumb={<Icon type={require('!svg-sprite!svg/about.svg')} />}
                        onClick={() => {
                            router.push('/tab/About');
                        }}
                    >
                        关于
                    </List.Item>
                </List>
            </PageView>
        );
    }
}

export function mapStateToProps(state) {
    return {
        ...state,
    };
}
