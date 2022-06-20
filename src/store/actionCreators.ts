import { FormValuesStorageAction, StylesStorageAction } from "../@types";
import * as actionTypes from "./actionTypes";

export function updateAddBtnWidth(width: number) {
  const action: StylesStorageAction = {
    type: actionTypes.UPDATE_ADD_BTN_WIDTH,
    storage: { addBtnWidth: width },
  };

  return action;
}

export function addProduct(name: string, storeName: string) {
  const action: StylesStorageAction = {
    type: actionTypes.ADD_PRODUCT,
    storage: { name: name, storeName: storeName },
  };

  return action;
}

export function deleteProduct(id: number) {
  const action: StylesStorageAction = {
    type: actionTypes.DELETE_PRODUCT,
    storage: { id: id },
  };

  return action;
}

export function setProductNameVal(name: string) {
  const action: FormValuesStorageAction = {
    type: actionTypes.SET_PRODUCT_INPUT,
    storage: { productName: name },
  };

  return action;
}

export function setStoreNameVal(name: string) {
  const action: FormValuesStorageAction = {
    type: actionTypes.SET_STORE_INPUT,
    storage: { storeName: name },
  };
  return action;
}

export function setDefaultValues() {
  const action: FormValuesStorageAction = {
    type: actionTypes.SET_DEFAULT_VALUES,
  };

  return action;
}
