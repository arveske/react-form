import {
  IFormValuesStorageSet,
  IStoreNameResponseItem,
  IStylesStorageSet,
} from "../@interfaces";

export type GetStoreNameResponse = IStoreNameResponseItem[];

export type StylesStorageAction = {
  type: string;
  storage: IStylesStorageSet;
};

export type ProductStorageAction = {
  type: string;
  storage: IProductStorageSet;
};

export type FormValuesStorageAction = {
  type: string;
  storage?: IFormValuesStorageSet;
};
