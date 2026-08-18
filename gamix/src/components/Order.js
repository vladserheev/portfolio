import React, { Component } from 'react'
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
  render() {
    return (
      <div className="item">
            <img src={"./img/"+this.props.item.image}/>
            <h2>{this.props.item.title}</h2>
            <b className="price">{this.props.item.price}$</b>
            <FaTrash onClick={() => this.props.onDelete(this.props.item.id)} className="delete-icon" />
        </div>
    )
  }
}

export default Order
