import * as types from '../types/searchString';
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case types.CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}