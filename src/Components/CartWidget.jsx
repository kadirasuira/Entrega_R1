import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './CartWidget.css'; // Agrega estilos CSS (opcional)

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado (puedes cambiarlo según tus necesidades)

  return (
    <div className="cart-widget">
      <FiShoppingCart size={24} />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartWidget;