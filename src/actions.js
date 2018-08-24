import { 
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: await response.json() });
  } catch(e) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: e });
  }
};