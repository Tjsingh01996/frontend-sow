export const getTranslationText = (state, page) => (key) => {
   
  if (
    !(
      state.translation &&
      state.translation[page] &&
      state.translation[page][key]
    )
  ) {
    return "";
  }
  return state.translation[page][key];
};