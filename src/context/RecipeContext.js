import { createContext } from "react";
import {
  CURRENT_RECIPE,
  PAY_CLICK,
  CLOSE_OTP,
  CLOSE_CREDIT,
  VERIFY_OTP,
} from "./types";

const RecipeContext = createContext();

const initialState = {
  currentRecipe: {},
  payClickCount: 0,
  otpModel: false,
  creditModel: false,
  otpVerification: {
    status: "PENDING",
    msg: "",
  },
};

const recipeReducer = (draft, action) => {
  switch (action.type) {
    case CURRENT_RECIPE:
      draft.currentRecipe = action.payload;
      draft.creditModel = true;
      return draft;
    case CLOSE_OTP:
      draft.otpModel = false;
      return draft;
    case CLOSE_CREDIT:
      draft.creditModel = false;
      return draft;
    case PAY_CLICK:
      draft.payClickCount += 1;
      draft.otpModel = true;
      return draft;
    case VERIFY_OTP:
      draft.otpVerification.status = action.payload.status;
      draft.otpVerification.msg = action.payload.msg;
      draft.otpModel = false;
      return draft;
    default:
      break;
  }
};

export { recipeReducer, initialState };
export default RecipeContext;
