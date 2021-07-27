export const GET_CONTACTS  = 'GET_CONTACTS';
//const API_URL = 'https://dummyapi.io/data/api/';
//const API_URL = "http://fakeapi.jsonparseronline.com/users";
const API_URL = 'https://jsonplaceholder.typicode.com/users';
const API_KEY = '60e986cf08e28b5421887a59';
//const API_KEY = '60e882648d40e2048b2fe033';
import axios from 'axios';

export const getContacts = () => {
  try {
    return async dispatch => {
//      const res = await axios.get(`${API_URL}/user`, { headers: { 'app-id': API_KEY } });
      const res = await axios.get(API_URL);
      if (res.data) {
        dispatch({
          type: GET_CONTACTS,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};
