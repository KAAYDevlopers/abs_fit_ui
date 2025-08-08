import { combineReducers } from "redux";
import ProductCatalogReducer from "./slices/ProductCatalogSlice";

const appReducer = combineReducers({
  ProductCatalog: ProductCatalogReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: RootState | undefined, action: any) => {
  if (action.type === "CLEAR_STORE") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
