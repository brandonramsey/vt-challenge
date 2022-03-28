import { configureStore } from "@reduxjs/toolkit";
import { State } from "./types";

const initialState: State = {
  items: [],
  addItemModalOpen: false,
};

export const actions = {
  OPEN_ADD_ITEM_MODAL: "OPEN_ADD_ITEM_MODAL",
  CLOSE_ADD_ITEM_MODAL: "CLOSE_ADD_ITEM_MODAL",
  ADD_ITEM: "ADD_ITEM",
};


const store =  configureStore({
  reducer: (state: State = initialState, action) => {
    switch(action.type) {
      case actions.OPEN_ADD_ITEM_MODAL: {
        return {
          ...state,
          addItemModalOpen: true,
        };
      }
      case actions.CLOSE_ADD_ITEM_MODAL: {
        return {
          ...state,
          addItemModalOpen: false,
        };
      }
      case actions.ADD_ITEM: {
        const newItem = action.payload;
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
    }
    return state;
  },
});

export default store;

export type Dispatch = typeof store.dispatch;
