import * as types from '../types/searchString';
// action creators
export const createActionChangeSearchString = payload => ({ payload: payload, type: types.CHANGE });