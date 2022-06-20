import { IFormValuesStorage } from "../@interfaces";
import { FormValuesStorageAction } from "../@types";
import * as actionTypes from "./actionTypes";

const initialState: IFormValuesStorage = {
  productName: "",
  storeName: "",
};

const reducer = (
  state: IFormValuesStorage = initialState,
  action: FormValuesStorageAction
): IFormValuesStorage => {
  switch (action.type) {
    case actionTypes.SET_PRODUCT_INPUT:
      return {
        ...state,
        ...{
          productName: action?.storage?.productName || ""
        },
      };
    case actionTypes.SET_STORE_INPUT:
      return {
        ...state,
        ...{
          storeName: action?.storage?.storeName || ""
        },
      };
    case actionTypes.SET_DEFAULT_VALUES:
      return {
        ...initialState,
      };
  }
  return state;
};

export default reducer;
