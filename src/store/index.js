import { createStore } from "redux";
import RootReducer from "../reducers";

export default function configureStore() {
  return createStore(RootReducer, {count: 0});
}

/**
 * ACCIONES DEL STORE
 * 
 * get state = obtiene el estado inicial
 * dispatch ejecuta un reducer
 * subscribe que se ejecuta cada vez que se manda un reducer
 * 
 */
