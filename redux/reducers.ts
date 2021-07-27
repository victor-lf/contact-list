import {GET_CONTACTS} from './actions';

const initialState = {
  contacts: [],
};

function contactsReducer(state = initialState, action?) {
  switch (action.type) {
    case GET_CONTACTS:
      return {...state, contacts: action.payload};
    default:
      return state;
  }
}
export default contactsReducer;
