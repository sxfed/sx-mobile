import React, {Component} from 'react';
import {List, Icon} from 'antd-mobile';

import PageView from '../../commons/pageView/PageView';
import Header from '../Components/Header';

export default class LayoutComponent extends Component {
    state = {}

    handleHrefClick = () => {
        window.location.href = 'https://sxfed.github.io/';
    }

    render() {
        return (
            <PageView>
                <Header iconName={null} title="About">About</Header>
                <img src="/static/image/logo.png" alt="logo" style={{
                    width: '2.2rem',
                    margin: '1rem auto 0',
                }}/>
                <p style={{
                    textAlign: 'center',
                    marginBottom: '0.5rem',
                    color: '#888',
                }}>随行付大前端</p>
                <List>
                    <List.Item
                        arrow="horizontal"
                        thumb={<Icon type={require('!svg-sprite!svg/github.svg')} />}
                        extra="sxfed"
                        onClick={this.handleHrefClick}
                    >
                        Github
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
