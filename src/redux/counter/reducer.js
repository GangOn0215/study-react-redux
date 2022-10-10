import { INCREMENT, DECREMENT } from './types';

const initialState = {
  number: 0,
};

const counterReducer = (currentState = initialState, action) => {
  const newState = { ...currentState };

  switch (action.type) {
    case INCREMENT:
      newState.number++;
      break;
    case DECREMENT:
      newState.number--;
      break;
    default:
      break;
  }

  return newState;
};

export default counterReducer;
