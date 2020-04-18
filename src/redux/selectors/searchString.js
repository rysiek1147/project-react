// selectors
export const getSearchString = ({searchString}) => searchString;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => card.title.toLowerCase().includes(searchString.toLowerCase())).length;
export const countAllCards = ({cards}) => cards.length;