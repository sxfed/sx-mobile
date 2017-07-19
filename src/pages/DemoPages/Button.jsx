import React, {Component} from 'react';
import {Button, WingBlank, WhiteSpace} from 'antd-mobile';

import PageView from '../../commons/pageView/PageView';
import Header from '../Components/Header';

export const PAGE_ROUTE = '/demo/Button';

export class LayoutComponent extends Component {
    state = {
        a: true,
    }

    render() {
        return (
            <PageView>
                <Header title="Button 按钮">Button 按钮</Header>
                <WingBlank>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <Button>Button</Button>
                    <WhiteSpace size="lg" />
                    <Button type="primary">primary Button</Button>
                    <WhiteSpace size="lg" />
                    <Button loading>loading Button</Button>
                </WingBlank>
            </PageView>
        );
    }
}
