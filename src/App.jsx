import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
    isDev,
    configureStore,
    Router,
    initRouter,
    PubSubMsg,
    promiseAjax,
} from 'sx-ui';
import {Toast} from 'antd-mobile';
import FastClick from 'fastclick';

import './global.less';
import * as Error404 from './pages/error/Error404';
import * as Frame from './Frame';
import * as Tab from './pages/Tab';
import {getAjaxBaseUrl, handleErrorMessage} from './commons';
import {holdLocationQuery} from './utils/location';

// 添加fastclick支持
FastClick.attach(document.body);

// 设置需要保留的参数
holdLocationQuery('hVisible');

if (isDev) {
    require('./mock/index');

    console.log('current mode is debug, mock is started');
}

initRouter({
    Error404,
    Frame,
    Home: Tab,
    historyListen: (history) => {
        PubSubMsg.publish('history-change', history);
    },
    onLeave: (/* prevState */) => {
        Toast.loading('加载中...', 30);
    },
    onEnter: (/* nextState, replace */) => {
        Toast.hide();
    },
    onRouterDidMount: () => {

    },
});

promiseAjax.init({
    setOptions: (instance) => {
        instance.defaults.baseURL = getAjaxBaseUrl();
        instance.defaults.timeout = 20000;
    },
    onShowErrorTip: (err, errorTip) => {
        Toast.info(errorTip);
        if (errorTip !== false) {
            handleErrorMessage(err);
        }
    },
    onShowSuccessTip: (response, successTip) => {
        if (successTip !== false) {
            // TODO show success
            Toast.info(successTip);
        }
    },
    isMock: (url /* url, data, method, options */) => {
        return url.startsWith('/mock');
    },
});

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('main'));
