import React from "react";

const Purchase = ({
  id,
  text,
  isFavorite,
  deletePurchase,
  favoritePurchase,
}) => {
  return (
    <div className={`purchase ${isFavorite && 'purchase__favorite'}`}>
      <div className='purchase__wrapper'>
        <div onClick={() => favoritePurchase(id)} className='purchase__star'>
          🌠
        </div>
        <div className='purchase__text'>{text}</div>
      </div>
      <button onClick={() => deletePurchase(id)} className='purchase__delete'>
        👛
      </button>
    </div>
  );
};
export default Purchase;
