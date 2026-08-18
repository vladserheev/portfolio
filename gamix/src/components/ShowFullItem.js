import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='fullItem'>
        <div>
        <img src={"./img/"+this.props.item.image} onClick={() => {
            this.props.onShowItem(this.props.item)
        }}/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <b className="price">{this.props.item.price}$</b>
        <div className="add-to-cart" onClick={() => this.props.addToCart(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem
