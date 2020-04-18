import shortid from 'shortid';
import * as types from '../types/cards';
// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: types.ADD_CARD });