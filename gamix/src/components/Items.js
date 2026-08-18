import React, { Component } from 'react'
import Item from './item'

export class Items extends Component {
  render() {
    return (
      <main className="items">
        {this.props.items.map(item => (
          <Item onShowItem={this.props.onShowItem} key={item.id} item={item} addToCart={this.props.addToCart}/>
        ))}
      </main>
    )
  }
}
  
export default Items
