import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {id: 1, name: "All"},
                {id: 2, name: "RPG"},
                {id: 3, name: "Action"},
                {id: 4, name: "Adventure"},
            ]
        }
    }
  render() {
    return (
      <div className="categories">
        {this.state.categories.map(category => {
            return(
            <div key={category.id} onClick={() => this.props.chooseCategory(category.name)} className="category">
                {category.name}
            </div>
            )
        })}
      </div>
    )
  }
}

export default Categories
