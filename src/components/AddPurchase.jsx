import React from "react";

const AddPurchase = ({
  text,
  handleTextChange,
  handleKeyDownInput,
  addPurchase,
}) => {
  return (
    <div className="add-purchase">
      <input
        type="text"
        className="add-purchase__input"
        placeholder="Введите текст..."
        value={text}
        onChange={(e) => handleTextChange(e)}
        onKeyDown={(e) => handleKeyDownInput(e)}
      />
      <button type="submit" className="add-purchase__btn" onClick={ addPurchase }>
        Купить
      </button>
    </div>
  );
};
export default AddPurchase;
