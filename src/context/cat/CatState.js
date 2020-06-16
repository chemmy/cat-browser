import React, { useReducer } from "react";
import CatContext from "./catContext";
import catReducer from "./catReducer";
import catapi from "../../api/catapi";

import { GET_BREEDS } from "../types";

const CatState = (props) => {
  const initialState = {
    breeds: [],
  };

  const [state, dispatch] = useReducer(catReducer, initialState);

  // Get Contacts
  const getBreeds = async () => {
    const res = await catapi.get("/breeds");
    dispatch({ type: GET_BREEDS, payload: res.data });
  };

  return (
    <CatContext.Provider
      value={{
        breeds: state.breeds,
        getBreeds,
      }}
    >
      {props.children}
    </CatContext.Provider>
  );
};

export default CatState;
