// selectors
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);