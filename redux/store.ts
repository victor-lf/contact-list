import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import contactsReducer from './reducers';
const rootReducer = combineReducers({
  contactsReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
