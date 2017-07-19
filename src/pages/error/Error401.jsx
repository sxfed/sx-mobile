import React, {Component} from 'react';
import './style.less';
import {toLogin} from '../../commons';

export const PAGE_ROUTE = '/error/401';

export class LayoutComponent extends Component {
    state = {
        remainSecond: 9,
    }

    componentDidMount() {
        this.si = setInterval(() => {
            let {remainSecond} = this.state;
            remainSecond--;
            if (remainSecond <= 0) {
                this.clear();
                toLogin();
            }
            this.setState({
                remainSecond,
            });
        }, 1000);
    }

    componentWillUnmount() {
        this.clear();
    }

    clear() {
        if (this.si) {
            clearInterval(this.si);
        }
    }

    render() {
        const {remainSecond} = this.state;
        return (
            <div className="error-page">
                <p className="error-text">您还未登录，请您先登录！</p>
                <p className="error-text error-sub-text">{remainSecond} 秒后跳转到登录页面...</p>
            </div>
        );
    }
}
