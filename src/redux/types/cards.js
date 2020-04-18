// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;
// action types
export const ADD_CARD = createActionName('ADD_CARD');