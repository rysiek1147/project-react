// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export const getCardsFromSearch = ({cards}, searchString) => cards.filter(card => card.title.toLowerCase().includes(searchString.toLowerCase()));
