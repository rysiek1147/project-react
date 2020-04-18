import * as types from '../types/cards';
// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case types.ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}