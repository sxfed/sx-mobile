import {
    isDev,
    isPro,
    isTest,
    isRC,
} from 'sx-ui';

export function getCurrentLoginUser() {
    // TODO
    return {
        createUserId: '111645',
        salesmanCode: '111645',
    };
}

export function toLogin() {
    return window.location.href = '/login';
}

export function getAjaxBaseUrl() {
    if (isDev) {
        // return 'http://172.16.40.245:8080';
        // return 'http://172.16.135.97:8080'; // 开发服务器
        return 'http://172.16.136.82:8080'; // 测试服务器
        // return 'http://172.16.41.157:8080/';
        // return 'http://172.16.40.50:8081/';
        // return 'http://172.16.20.57:8081';
        // return 'http://172.16.40.231:8080/';
        //
        // return 'http://172.16.40.76:8080/'; // 春凤
    }
    if (isPro) {
        return '/api/';
    }

    if (isTest) {
        return '/api/';
    }

    if (isRC) {
        return '/api/';
    }
    return '/';
}

export function handleErrorMessage(err) {
    console.log(err); // TODO
}
