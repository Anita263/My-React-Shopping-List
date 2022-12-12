import React, { useState } from "react";
import AddPurchase from "./AddPurchase";
import Shopping from "./Shopping";
import { uid } from "uid";

const Main = () => {
  const [shopping, setShopping] = useState([]);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const addPurchase = () => {
    if (!text) {
      return;
    }
    setShopping([
      {
        id: uid(),
        text: text,
        isFavorite: false,
      },
      ...shopping,
    ]);
    setText("");
  };

  const handleKeyDownInput = (e) => {
    if (e.key === "Enter") {
      addPurchase();
    }
  };

  const deletePurchase = (elementId) => {
    setShopping(
      shopping.filter((item) => {
        if (item.id === elementId) {
          return false;
        }
        return true;
      })
    );
  };

  const favoritePurchase = (elementId) => {
    setShopping(
        shopping.map((item) => {
if (item.id === elementId) {
            return {
                ...item,
                isFavorite: !item.isFavorite,
            };
        }
        return item;
    })
    );
  };

  return (
    <div>
      <AddPurchase
        text={text}
        handleTextChange={handleTextChange}
        handleKeyDownInput={handleKeyDownInput}
        addPurchase={addPurchase}
      />
      <Shopping
        text={text}
        shopping={shopping}
        deletePurchase={deletePurchase}
        favoritePurchase={favoritePurchase}
      />
    </div>
  );
};
export default Main;
