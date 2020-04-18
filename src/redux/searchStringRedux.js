// selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => card.title.toLowerCase().includes(searchString.toLowerCase())).length;
export const countAllCards = ({cards}) => cards.length;
// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const CHANGE = createActionName('CHANGE');
// action creators
export const createActionChangeSearchString = payload => ({ payload: payload, type: CHANGE });
// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}

