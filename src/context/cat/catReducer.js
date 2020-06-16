import { GET_BREEDS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BREEDS:
      return { ...state, breeds: action.payload };
    default:
      return state;
  }
};
