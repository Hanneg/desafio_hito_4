import React, { useState } from 'react'
import { pizzaCart } from '../assets/js/pizzas.js';
import '../App.css';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (pizzaId) => {
    const updatedCart = cart.map(pizza => {
      if (pizza.id === pizzaId) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (pizzaId) => {
    const updatedCart = cart
      .map(pizza => {
        if (pizza.id === pizzaId) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      })
      .filter(pizza => pizza.count > 0); // elimina del carrito si cantidad es 0
    setCart(updatedCart);
  };

  const getTotal = () => {
    return cart.reduce((sum, pizza) => sum + pizza.price * pizza.count, 0);
  };

  return (
    <div className="product-detail">
      <p className="title">Detalles de mi pedido:</p>

      <div class="my-order-content">
        {
          cart.map ( (pizza) => {
            return <div key={pizza.id} className="shopping-cart">
                      <figure>
                        <img src={pizza.img} alt="bike"/>
                      </figure>
                      <p>{pizza.name}</p>
                      <p>${pizza.price * pizza.count}</p>
                      <p className='minusproduct' onClick={() => decreaseQuantity(pizza.id)}>-</p>
                      <p id="addQuantity">{pizza.count}</p>
                      <p className='sumproduct' onClick={() => increaseQuantity(pizza.id)}>+</p>
                    </div>
          })
        }
        <p>Total: ${getTotal()}</p>
        <button className="primary-button">
          Pagar
        </button>
      </div>
    </div>
  )
}

export default Cart
