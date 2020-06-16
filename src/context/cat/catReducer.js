import {
  GET_BREEDS,
  GET_CATS,
  SET_SELECTED_BREED,
  SET_LOADING,
  SET_SEARCH_OPTIONS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BREEDS:
      console.log("GET_BREEDS");
      return { ...state, breeds: action.payload };
    case GET_CATS:
      console.log("GET_CATS");
      return { ...state, cats: action.payload, isLoading: false };
    case SET_SELECTED_BREED:
      console.log("SET_SELECTED_BREED");
      return {
        ...state,
        selectedBreed: action.payload,
        cats: [],
        page: 0,
        hasMore: true,
      };
    case SET_LOADING:
      console.log("SET_LOADING");
      return { ...state, isLoading: true };
    case SET_SEARCH_OPTIONS:
      console.log("SET_SEARCH_OPTIONS", action.payload);
      return {
        ...state,
        page: action.payload.page,
        hasMore: action.payload.hasMore,
      };
    default:
      return state;
  }
};
