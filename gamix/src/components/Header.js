import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order'
import Navbar from './Navbar'

export default function Header(props) {
  return (
    <header>
        <div>
            <Navbar orders={props.orders} onDelete={props.onDelete}/>
        </div>
    </header>
  )
}
