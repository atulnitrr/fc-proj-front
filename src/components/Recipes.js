import React, { useEffect, useState } from "react";
import axios from "axios";
import SIngleRecipe from "./SIngleRecipe";
import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipeData() {
      try {
        const recipeResponse = await axios.get(
          `http://starlord.hackerearth.com/recipe`
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
    <div className="rc-top-c">
      {recipes.map((recipe) => {
        return <SIngleRecipe key={recipe.id} recipe={recipe}></SIngleRecipe>;
      })}
    </div>
  );
}

export default Recipes;
