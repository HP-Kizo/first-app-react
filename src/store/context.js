import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const GET_PRODUCT = "GET_PRODUCT";
export const SHOW_POPUP = "SHOW_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";
export const ADD_CART = "ADD_CART";
export const UPDATE_CART = "UPDATE_CART";
export const DELETE_CART = "DELETE_CART";
export const ON_LOGOUT = "ON_LOGOUT";
export const ON_LOGIN = "ON_LOGIN";
// Sử dụng redux persirt để lưu các state, tránh reload bị mất

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["userLogin", "cart_manager"],
};
const initState = {
  userLogin: JSON.parse(localStorage.getItem("user")) || null,
  show_popup: false,
  cart_manager: [],
  separateNumber: separateNumber,
};
const reducerContext = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, listProduct: action.product };
    case ON_LOGIN:
      return {
        ...state,
        userLogin: action.userLogin,
      };
 

    default:
      return state;
  }
};
const persistedReducer = persistReducer(persistConfig, reducerContext);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
