import * as types from '../types/columns';
// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case types.ADD_COLUMN:
      return [...state, action.payload];
    default:
      return state;
  }
}