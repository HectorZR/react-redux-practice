import { createStore } from 'redux';
import rootReducer from '../reducers';
export default () => {
  return createStore(rootReducer, {count: 0});
}