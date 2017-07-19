import React, {Component} from 'react';
import {Toast} from 'antd-mobile';
import {PubSubMsg} from 'sx-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import handleErrorMessage from './commons/handle-error-message';
import PageView from './commons/pageView/PageView.jsx';

NProgress.configure({showSpinner: false});

export class LayoutComponent extends Component {
    state = {}

    componentWillMount() {
        const {actions} = this.props;
        actions.getStateFromStorage();

        PubSubMsg.subscribe('message', ({type, message: msg, error = {}}) => {
            if (type === 'error') {
                handleErrorMessage(error);
            } else if (type === 'success') {
                Toast.success(msg, 3);
            } else {
                Toast.info(msg, 3);
            }
        });

        PubSubMsg.subscribe('history-change', (/* history */) => {
        });

        PubSubMsg.subscribe('start-fetching-component', () => {
            NProgress.start();
        });

        PubSubMsg.subscribe('end-fetching-component', () => {
            NProgress.done();
        });
    }

    render() {
        return (
            <PageView className="app-frame main-frame">
                {this.props.children}
            </PageView>
        );
    }
}

export function mapStateToProps(state) {
    return {
        ...state.frame,
    };
}
