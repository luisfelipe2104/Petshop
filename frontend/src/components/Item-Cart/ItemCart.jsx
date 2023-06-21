import React, { useState } from "react";
import "./ItemCart.css";

export default function ItemCart() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="item-cart">
      <div className="item-cart-container">
        <div className="item-info">
          <div className="img-item"></div>
          <h1 className="no-scroll3">Nome do Item</h1>
        </div>

        <div className="item-price">
          <h2 className="no-scroll">R$ 123,12</h2>

          <div className="item-quantity">
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <h2 className="no-scroll2">{quantity}</h2>
            <button
              onClick={() =>
                setQuantity(quantity > 0 ? quantity - 1 : quantity)
              }
            >
              -
            </button>
          </div>
        </div>
      </div>

      <div className="finish-purchase">
        <div className="finish-purchase-values">
          <h3>Total: </h3>
          <h2 className="no-scroll3">R$ 100,00</h2>
        </div>

        <button>Finalizar Compra</button>
      </div>
    </div>
  );
}
