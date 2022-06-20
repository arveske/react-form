import { IStylesStorage } from "../@interfaces";
import { StylesStorageAction } from "../@types";
import * as actionTypes from "./actionTypes";

const initialState: IStylesStorage = {
  addBtnWidth: 75,
};

const reducer = (
  state: IStylesStorage = initialState,
  action: StylesStorageAction
): IStylesStorage => {
  switch (action.type) {
    case actionTypes.UPDATE_ADD_BTN_WIDTH:
      return {
        ...state,
        ...action.storage,
      };
  }
  return state;
};

export default reducer;
