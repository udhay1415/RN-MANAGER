import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/type';

// defining the initial state
const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // creating and returning the new object
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
