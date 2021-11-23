import { CHANGE_LANG } from '../actions/languageAction';
const initialState = {
  langBoolean: false,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        langBoolean: action.payload,
      };
    default:
      return state;
  }
}
