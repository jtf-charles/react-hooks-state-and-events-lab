import React , { useState }  from "react";



function Item({ name, category }) {
  const [cartState, setCart]=useState(false);

  function cartModeHandle(){
    setCart(!cartState);
  }

  const appCart = cartState? "in-cart" : ""
  return (
    <li className={appCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartModeHandle}>{cartState? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
