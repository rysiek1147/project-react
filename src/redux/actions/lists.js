import * as types from '../types/lists';
import shortid from 'shortid';
// action creators
export const createActionAddList = payload => ({ payload: { ...payload, id: shortid.generate() }, type: types.ADD_LIST });