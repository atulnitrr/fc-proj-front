import React from "react";
import { useImmerReducer } from "use-immer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Recipes from "./components/Recipes";
import RecipeContext, {
  initialState,
  recipeReducer,
} from "./context/RecipeContext";
import OtpFailed from "./components/pages/OtpFailed";
import OtpSuccess from "./components/pages/OtpSuccess";

function App() {
  const [recipeState, recipeDispaptch] = useImmerReducer(
    recipeReducer,
    initialState
  );

  return (
    <div className="app-container">
      <RecipeContext.Provider value={{ recipeState, recipeDispaptch }}>
        <BrowserRouter>
          <Switch>
            <Route path="/otpsuccess" exact>
              <OtpSuccess></OtpSuccess>
            </Route>
            <Route path="/otpfailed" exact>
              <OtpFailed></OtpFailed>
            </Route>
            <Route>
              <Recipes></Recipes>
            </Route>
          </Switch>
        </BrowserRouter>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
