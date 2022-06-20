import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IProductInStorage, IStoreNameResponseItem } from "./@interfaces";
import { fetchStoreNames } from "./api";
import "./App.scss";
import CustomButton from "./components/CustomButton";
import CustomInput from "./components/CustomInput";
import CustomSelector from "./components/CustomSelector";
import TableRow from "./components/TableRow";
import store from "./store";
import {
  addProduct,
  deleteProduct,
  setProductNameVal,
  setStoreNameVal,
} from "./store/actionCreators";

function App() {
  const [apiData, setAPIData] = useState<IStoreNameResponseItem[]>([]);
  const [products, setProducts] = useState<IProductInStorage[]>([]);
  const [showErrors, setShowErrors] = useState<{
    errorProd: boolean;
    errorStore: boolean;
  }>({ errorProd: false, errorStore: false });

  const addBtnWidth = store.getState().stylesStorage.addBtnWidth;
  const dispatch: Dispatch<any> = useDispatch();

  const setProductName = (productName: string) =>
    dispatch(setProductNameVal(productName));
  const setStoreName = (storeName: string) =>
    dispatch(setStoreNameVal(storeName));

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const apiData = await fetchStoreNames();
        setAPIData(apiData);
      } catch (error) {
        console.log(error);
      }
    };
    getAPIData();
  }, []);

  return (
    <div className="App">
      <div className="main-table">
        <div className="label-text">Add to cart:</div>
        <div className="table-grid">
          <div className="product-name-head">
            <CustomInput
              placeholder="Name"
              setVal={setProductName}
              showError={showErrors.errorProd}
            />
          </div>
          <div className="store-name-head">
            <CustomSelector
              options={apiData}
              defaultOption="Select shop"
              setVal={setStoreName}
              showError={showErrors.errorStore}
            />
          </div>
          <div className="store-name-btn">
            <CustomButton
              value="Add"
              action={() => {
                const { productName, storeName } =
                  store.getState().formValuesStorage;
                if (productName && storeName) {
                  dispatch(addProduct(productName, storeName));
                }
                setShowErrors({
                  errorProd: !productName,
                  errorStore: !storeName,
                });
                setProducts(store.getState().productsStorage.products);
              }}
            />
          </div>
          {products
            .slice()
            .reverse()
            .map(({ name, storeName, id }) => {
              return (
                <TableRow
                  key={id}
                  productName={name}
                  storeName={storeName}
                  width={addBtnWidth}
                  action={() => {
                    dispatch(deleteProduct(id));
                    setProducts(store.getState().productsStorage.products);
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
