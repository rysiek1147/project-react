import * as types from '../types/lists';
// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case types.ADD_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}