export const SET_VISITOR = 'SET_VISITOR';

export const SET_VARS = 'SET_VARS';

export const SET_BANNERS = 'SET_BANNERS';

export const SET_LISTS = 'SET_LISTS';
export const APPEND_LISTS = 'APPEND_LISTS';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_LIST_ITEM = 'UPDATE_LIST_ITEM';

export const SET_OBJS = 'SET_OBJS';
export const APPEND_OBJS = 'APPEND_OBJS';

export function setVisitor(visitor) {
  return {
    type: SET_VISITOR,
    visitor: visitor
  };
}

export function logout() {
  return {
    type: SET_VISITOR,
    visitor: {
      isLogin: false,
    }
  };
}

export function setVars(key, value) {
  return {
    type: SET_VARS,
    key,
    value
  };
}

export function setBanners(bannerType, banners) {
  return {
    type: SET_BANNERS,
    bannerType,
    banners
  }
}

export function setLists(key, list) {
  return {
    type: SET_LISTS,
    key,
    list
  }
}

export function appendLists(key, list) {
  return {
    type: APPEND_LISTS,
    key,
    list
  }
}

export function updateListItem(key, index, item) {
  return {
    type: UPDATE_LIST_ITEM,
    key,
    index,
    item
  }
}

export function removeItem(key, index) {
  return {
    type: REMOVE_ITEM,
    key,
    index
  }
}

export function setObjs(key, value) {
  return {
    type: SET_OBJS,
    key,
    value
  }
}

export function appendObjs(key, objKey, objValue) {
  return {
    type: APPEND_OBJS,
    key,
    value: (typeof objKey === 'object') ? objKey : _.object([[objKey, objValue]])
  }
}

export function mapSet(...keyPath) {
  let value = keyPath.pop();
  return {
    type: 'MAP_SET',
    keyPath,
    value
  }
}

export function mapDelete(...keyPath) {
  return {
    type: 'MAP_DELETE',
    keyPath
  }
}

export default exports;
