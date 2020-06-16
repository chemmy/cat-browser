import {
  GET_BREEDS,
  GET_CATS,
  SET_SELECTED_BREED,
  SET_LOADING,
  SET_SEARCH_OPTIONS,
  GET_CAT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BREEDS:
      return { ...state, breeds: action.payload };
    case GET_CATS:
      return { ...state, cats: action.payload, isLoading: false };
    case SET_SELECTED_BREED:
      return {
        ...state,
        selectedBreed: action.payload,
        cats: [],
        page: 0,
        hasMore: true,
      };
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_SEARCH_OPTIONS:
      return {
        ...state,
        page: action.payload.page,
        hasMore: action.payload.hasMore,
      };
    case GET_CAT:
      return { ...state, selectedCat: action.payload, isLoading: false };
    default:
      return state;
  }
};
