import { GetStoreNameResponse } from "../@types";
import storeDataJson from "../data.json";

/**
 * Method fetching store names
 * @returns after 500ms returns data.json file data
 */
export const fetchStoreNames = () => {
  return new Promise<GetStoreNameResponse>((resolve) => {
    setTimeout(() => resolve(storeDataJson), 500);
  });
};
