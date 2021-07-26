import { INGREDIENT_PRICE } from "./prices";

const initialState = {
  ing: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDING":
      return {
        ...state,
        ing: { ...state.ing, [action.ingType]: state.ing[action.ingType] + 1 },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingType],
      };
    case "REMOVE":
      return {
        ...state,
        ing: { ...state.ing, [action.ingType]: state.ing[action.ingType] - 1 },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingType],
      };

    default:
      return state;
  }
};

export default reducer;
