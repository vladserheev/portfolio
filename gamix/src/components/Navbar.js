import React from 'react'
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import Order from './Order'

import {
    Link
} from "react-router-dom";


export default function Navbar(props){
let [menuOpen, setMenuOpen] = React.useState(false);
let [cartOpen, setCartOpen] = React.useState(false);
    return (
      <div>
        <span className="logo">Gamix</span>
        <FaBars
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <ul className={menuOpen ? "navbar active" : "navbar"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-icon ${cartOpen ? 'active' : ''}`}/>
      </ul>
            
    {cartOpen && (
        <div className="cart">
            {props.orders.length > 0 ? (props.orders.map(item => (
                <Order onDelete={props.onDelete} key={item.id} item={item} />
            ))): <p>Please add some items to the cart</p>}
            <p className="total">Total: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.orders.reduce((total, item) => total + item.price, 0).toFixed(2))}</p>
        </div>
                )}
      </div>
    )
}

