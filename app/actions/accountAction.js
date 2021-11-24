export const IS_LOGIN = 'IS_LOGIN';
export const IS_LOGOUT = 'IS_LOGOUT';

export const changeLoginStatusToTrue = (loginInfo) => {
  return {
    type: IS_LOGIN,
    payload: loginInfo,
  };
};

export const changeLoginStatusToFalse = () => {
  return {
    type: IS_LOGOUT,
  };
};
