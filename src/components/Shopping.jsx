import React from "react";
import Purchase from "./Purchase";

const Shopping = ({ shopping, deletePurchase, favoritePurchase }) => {
  return (
    <div className="shopping">
      {shopping.map((purchase) => {
        return (
          <Purchase
            id={purchase.id}
            deletePurchase={deletePurchase}
            key={purchase.id}
            text={purchase.text}
            isFavorite={purchase.isFavorite}
            favoritePurchase={favoritePurchase}
          />
        );
      })}
    </div>
  );
};

export default Shopping;
