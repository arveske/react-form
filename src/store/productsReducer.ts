import { IProductsStorage } from "../@interfaces";
import { ProductStorageAction } from "../@types";
import * as actionTypes from "./actionTypes";

const initialState: IProductsStorage = {
  products: [],
};

const reducer = (
  state: IProductsStorage = initialState,
  action: ProductStorageAction
): IProductsStorage => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {
            id:
              state.products.length < 1
                ? 1
                : state.products[state.products.length - 1].id + 1,
            name: action.storage.name,
            storeName: action.storage.storeName,
          },
        ],
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter(({ id }) => id !== action.storage.id),
        ],
      };
  }
  return state;
};

export default reducer;
