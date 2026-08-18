import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import Presentation from "./components/Presentation";
import ShowFullItem from "./components/ShowFullItem";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders:[],
      currentItems:[],
      items:[
        {
    id: 1,
    title: "Cyberpunk 2077",
    price: 49.99,
    platform: "PC",
    genre: "RPG",
    image: "cyberpunk.jpg",
    category: "RPG",
    rating: 4.6,
    inStock: true
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    price: 39.99,
    platform: "PC",
    genre: "Action",
    image: "Red_Dead_Redemption_II.jpg",
    category: "Action",
    rating: 4.9,
    inStock: true
  },
  {
    id: 3,
    title: "Elden Ring",
    price: 59.99,
    platform: "PC",
    genre: "Souls-like",
    image: "Elden_Ring_-_cover.jpg",
    category: "RPG",
    rating: 4.9,
    inStock: true
  },
  {
    id: 4,
    title: "Hogwarts Legacy",
    price: 44.99,
    platform: "PC",
    genre: "Adventure",
    image: "hl.avif",
    category: "Adventure",
    rating: 4.7,
    inStock: false
  },
  {
    id: 5,
    title: "God of War",
    price: 34.99,
    platform: "PC",
    genre: "Action",
    image: "God_of_War_2018_cover.jpg",
    category: "Action",
    rating: 4.8,
    inStock: true
  },
  {
    id: 6,
    title: "The Witcher 3",
    price: 19.99,
    platform: "PC",
    genre: "RPG",
    image: "witcher.jpg",
    category: "RPG",
    rating: 5.0,
    inStock: true
  },
  {
    id: 7,
    title: "Forza Horizon 5",
    price: 54.99,
    platform: "PC",
    genre: "Racing",
    image: "forza.jpg",
    category: "Racing",
    rating: 4.8,
    inStock: true
  }
      ],
      showFullItem: false,
      fullItem:{}
    };
    this.state.currentItems = this.state.items;
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <div className="wrapper">
            <Header
              orders={this.state.orders}
              onDelete={this.deleteFromCart}
            />
            <Presentation/>
            <Categories chooseCategory={this.chooseCategory} />

            <main>
              <Items
                onShowItem={this.onShowItem}
                items={this.state.currentItems}
                addToCart={this.addToCart}
              />
            </main>

            {this.state.showFullItem && (
              <ShowFullItem
                onShowItem={this.onShowItem}
                addToCart={this.addToCart}
                item={this.state.fullItem}
              />
            )}

            <Footer />
          </div>
        }
      />

      <Route path="/about/*" element={<AboutPage this={this}/>} />
      <Route path="/shop/*" element={<Shop this={this}/>} />
      <Route path="/contact/*" element={<ContactPage this={this}/>} />
    </Routes>
  );
}
  onShowItem = (item) => {
    this.setState ({fullItem: item})
    this.setState ({showFullItem: !this.state.showFullItem})
  }

  chooseCategory = (category) =>{
    this.setState({
      currentItems: this.state.items.filter(item => category === item.category || category === "All")
    })
  }

  addToCart = (item) => {
      this.state.orders.includes(item) ? console.log("This item is already in the cart") :
      this.setState({orders: [...this.state.orders, item]})
  }

  deleteFromCart = (id) => {
    console.log(id);
    this.setState({orders: this.state.orders.filter(item => item.id !== id)})
  }
}

const AboutPage = (props) => (
    <div>
        <div className="wrapper">
          <Header orders={props.this.state.orders}
              onDelete={props.this.deleteFromCart}/>
        </div>
        <About/>
    </div>
);

const ContactPage = (props) => (
    <div>
        <div className="wrapper">
          <Header orders={props.this.state.orders}
              onDelete={props.this.deleteFromCart}/>
        </div>
        <Contact></Contact>
    </div>
);

const Shop = (props) => (
    <div>
        <div className="wrapper">
          <Header orders={props.this.state.orders}
              onDelete={props.this.deleteFromCart}/>
        </div>
        <main className="categoriesDiv">
          <Categories chooseCategory={props.this.chooseCategory} />
              <Items
                onShowItem={props.this.onShowItem}
                items={props.this.state.currentItems}
                addToCart={props.this.addToCart}
              />
            </main>
    </div>
);

export default App;