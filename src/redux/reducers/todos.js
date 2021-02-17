import { ADD_TODO } from '../actions/actionTypes';

const initState = {
  allIds: [],
  byIds: {},
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, payload } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: { ...state.byIds, [id]: { payload, complete: false } },
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
