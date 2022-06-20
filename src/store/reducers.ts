import styles_reducer from "./styleReducer";
import products_reducer from "./productsReducer";
import form_reducer from "./formValuesReducer";
import { combineReducers } from "redux";
import { IStorageState } from "../@interfaces";

const mainReducer = combineReducers<IStorageState>({
  stylesStorage: styles_reducer,
  productsStorage: products_reducer,
  formValuesStorage: form_reducer,
});

export default mainReducer;
