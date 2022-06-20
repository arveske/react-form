export interface IStoreNameResponseItem {
  name: string;
  id: string;
}

export interface IStorageState {
  stylesStorage: IStylesStorage;
  productsStorage: IProductsStorage;
  formValuesStorage: IFormValuesStorage;
}

export interface IStylesStorage {
  addBtnWidth: number;
}

export interface IStylesStorageSet {
  addBtnWidth?: number;
}

export interface IProductsStorage {
  products: IProductInStorage[];
}

export interface IProductInStorage {
  name: string;
  storeName: string;
  id: number;
}

export interface IStylesStorageSet {
  name?: string;
  storeName?: string;
  id?: number;
}

export interface IFormValuesStorage {
  productName: string;
  storeName: string;
}

export interface IFormValuesStorageSet {
  productName?: string;
  storeName?: string;
}
