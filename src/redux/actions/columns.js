import shortid from 'shortid';
import * as types from '../types/columns';
// action creators
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: types.ADD_COLUMN });