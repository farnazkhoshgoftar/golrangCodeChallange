import { GET_PEOPLES } from "../actions/types";

export const peoplesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PEOPLES:
      return [...state, ...action.payload].map((item) => {
        return {
          ...item,
        };
      });

    default:
      return state;
  }
};
