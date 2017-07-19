import {browserHistory} from 'react-router';

/**
 * 讲需要保留的参数添加到sessionStorage中
 * @param  {...String}  querys  参数列表
 * @return {void}
 */
export const holdLocationQuery = (...querys) => {
    const location = browserHistory.getCurrentLocation();

    querys.forEach(query => {
        const queryValue = location.query[query];
        if (queryValue) {
            sessionStorage[`location_query_session_${query}`] = queryValue;
        }
    });
};


/**
 * 获取sessionStorage中保持的参数
 * @param  {String}  参数名
 * @return {void}
 */
export const getLocationQuerySession = key => sessionStorage[`location_query_session_${key}`];
