import React, { useReducer } from "react";
import CatContext from "./catContext";
import catReducer from "./catReducer";
import catapi from "../../api/catapi";

import {
  GET_BREEDS,
  GET_CATS,
  SET_SELECTED_BREED,
  SET_LOADING,
  SET_SEARCH_OPTIONS,
} from "../types";

const SEARCH_LIMIT = 10;

const CatState = (props) => {
  const initialState = {
    breeds: [],
    cats: [],
    selectedBreed: null,
    selectedCat: null,
    page: 0,
    isLoading: false,
    hasMore: true,
  };

  const [state, dispatch] = useReducer(catReducer, initialState);

  const getBreeds = async () => {
    const res = await catapi.get("/breeds");
    dispatch({ type: GET_BREEDS, payload: res.data });
  };

  const getCatsList = async () => {
    if (!state.selectedBreed) return;
    dispatch({ type: SET_LOADING });

    const page = state.page + 1;
    const searchParams = [
      { key: "breed_id", value: state.selectedBreed },
      { key: "page", value: page },
      { key: "limit", value: SEARCH_LIMIT },
    ];
    const { data } = await catapi.get("/images/search", searchParams);

    const filtered = data.filter(
      (newCat) => !state.cats.find((cat) => cat.id === newCat.id)
    );
    const hasMore = filtered.length >= SEARCH_LIMIT;
    dispatch({ type: SET_SEARCH_OPTIONS, payload: { page, hasMore } });

    const newList = [...state.cats, ...filtered];
    dispatch({ type: GET_CATS, payload: newList });
  };

  const setSelectedBreed = (breedId) => {
    dispatch({ type: SET_SELECTED_BREED, payload: breedId });
  };

  return (
    <CatContext.Provider
      value={{
        breeds: state.breeds,
        cats: state.cats,
        selectedBreed: state.selectedBreed,
        isLoading: state.isLoading,
        hasMore: state.hasMore,
        getBreeds,
        getCatsList,
        setSelectedBreed,
      }}
    >
      {props.children}
    </CatContext.Provider>
  );
};

export default CatState;
