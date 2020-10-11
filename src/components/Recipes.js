import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SIngleRecipe from "./SIngleRecipe";
import "./Recipes.css";
import RecipeContext from "../context/RecipeContext";
import CreditCardDetail from "./models/CreditCardDetail";
import OtpModel from "./models/OtpModel";

function Recipes() {
  const { recipeState, recipeDispaptch } = useContext(RecipeContext);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipeData() {
      try {
        const recipeResponse = await axios.get(
          `${process.env.REACT_APP_PROJECT_BACKEND_URL}/fcdata`
        );

        setRecipes(recipeResponse.data);
      } catch (error) {
        // TODO --> toast error
        console.log(error);
      }
    }

    getRecipeData();
  }, []);

  return (
    <>
      {recipeState.creditModel ? (
        <CreditCardDetail
          recipe={recipeState.currentRecipe}
          recipeDispaptch={recipeDispaptch}
        ></CreditCardDetail>
      ) : (
        ""
      )}

      {recipeState.otpModel ? (
        <OtpModel recipeDispaptch={recipeDispaptch}></OtpModel>
      ) : (
        ""
      )}
      <div className="rc-top-c">
        {recipes.map((recipe) => {
          return (
            <SIngleRecipe
              key={recipe.id}
              recipe={recipe}
              recipeDispaptch={recipeDispaptch}
            ></SIngleRecipe>
          );
        })}
      </div>
    </>
  );
}

export default Recipes;
