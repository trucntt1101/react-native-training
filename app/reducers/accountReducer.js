import { IS_LOGIN, IS_LOGOUT } from '../actions';
const initialState = {
  isLogin: false,
  email: '',
  name: '',
  password: '',
  phone: '',
};
export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOGIN:
      return {
        isLogin: true,
        email: action.payload.email,
        name: action.payload.name,
        password: action.payload.password,
        phone: action.payload.phone,
      };
    case IS_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
}
