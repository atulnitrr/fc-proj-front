import React from "react";
import { CURRENT_RECIPE } from "../context/types";

function SIngleRecipe({ recipe, recipeDispaptch }) {
  //   {
  //     "id":4,
  //     "name":"Guntur chillies",
  //     "image":"https://i.imgur.com/Vc9JIXP.jpg",
  //     "category":"appetizer",
  //     "label":"Spicy",
  //     "price":"0.99",
  //     "description":"Assorted chillies from Guntur"

  // }

  const { name, image, price, description } = recipe;
  const hanleOnClick = () => {
    recipeDispaptch({ type: CURRENT_RECIPE, payload: recipe });
  };

  return (
    <>
      <div className="single-recipe-w" onClick={hanleOnClick}>
        <h4>{name}</h4>
        <div className="img-w">
          <img src={image} alt={name} />
        </div>
        <p> Price : ${price}</p>
        <p>{description}</p>
      </div>
    </>
  );
}

export default SIngleRecipe;
