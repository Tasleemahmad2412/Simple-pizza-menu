import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";
//================================================================
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//============================================================================

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// componenets of our application
// we can also write them as function expressions and also arrow functions
function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* // but if there are no pizza then we dont want this above paragraph to be
      //shown */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are still working on our menu, Please come back later :)</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="./pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// how we use props 1: we pass the props to the component and then we recieve the props into the component
// we write them like they are normal attributes
function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <h3>{pizzaObj.name}</h3>
      <div>
        <p>{pizzaObj.ingredients}</p>
        <img alt={pizzaObj.name} src={pizzaObj.photoName}></img>
        <span>{pizzaObj.soldOut ? "SOLD OUT!" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hours >= openHours && hours <= closeHours;
  console.log(isOpen);
  // if (hours >= openHours && hours <= closeHours) {
  //   alert("we are currently open");
  // } else {
  //   alert("Sorry we are closed");
  // }

  if (!isOpen) return <p>CLOSED</p>;
  // problem in this case is that we are now no longer rendering the footer element
  // if we want to do the exact thing we woukd also have to copy the footer here
  // this method is only useful for rendering entire componenets  and not just pieces of JSX

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} openHours={openHours} />
      ) : (
        <p>
          Sorry we are closed from {openHours}:00 to {closeHours}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We are currently Open!");
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We are Open Until {closeHours}:00. Come vist us or Order Online , we
        will open at {openHours}:00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
// new component
// rules: 1: Function name muust start with Uppercase letter
// 2: function must return a markup

// this the way we render our react DOM on React v18
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  // React Strict mode will only render components twice to check for certain bugs
  // also it will check if we are using the out dates parts of the react API
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
