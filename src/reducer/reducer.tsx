const initialState = {
  mode: "dark",
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
