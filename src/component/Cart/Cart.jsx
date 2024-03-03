import React, { useContext } from 'react'
import { CartConText } from '../../Context/CartContext'

export default function Cart() {
  let { cart } = useContext(CartConText)
  console.log(cart);
  return (
    <div>
      <h2>cart</h2>
    </div>
  )
}
