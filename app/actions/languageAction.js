export const CHANGE_LANG = 'CHANGE_LANG';

export const changeLanguage = (langBoolean) => {
  return {
    type: CHANGE_LANG,
    payload: langBoolean,
  };
};
