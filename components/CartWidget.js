import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesome o la biblioteca de íconos de tu elección

function CartWidget() {
  // Número hardcodeado para representar la cantidad de elementos en el carrito
  const itemCount = 3;

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon="shopping-cart" /> {/* Reemplaza con el ícono de tu elección */}
      <span className="notification-badge">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
