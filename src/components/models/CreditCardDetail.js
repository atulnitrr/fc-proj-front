import React from "react";
import { CLOSE_CREDIT, PAY_CLICK } from "../../context/types";
import "./CreditCardDetail.css";

function CreditCardDetail({ recipe, recipeDispaptch }) {
  const { price } = recipe;

  const handleSumbit = (e) => {
    e.preventDefault();
    recipeDispaptch({ type: PAY_CLICK });
    recipeDispaptch({ type: CLOSE_CREDIT });
  };
  const handleCancel = () => {
    recipeDispaptch({ type: CLOSE_CREDIT });
  };
  return (
    <div className="card-detail-w" style={{ display: "flex" }}>
      <div>
        <h3>Secure pay</h3>
      </div>

      <form action="" onSubmit={handleSumbit}>
        <input type="text" placeholder="name" minLength="2" />
        <input
          type="number"
          name=""
          id=""
          placeholder="card number"
          minLength="12"
        />
        <input type="date" name="" id="" placeholder="expiry date" />
        <button type="submit">Pay {price} </button>
        <button className="btn-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default CreditCardDetail;
