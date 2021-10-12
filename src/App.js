import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      {/* <ExternaUsers></ExternaUsers> */}
    </div>
  );
}

function ExternaUsers() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);
  return (
    <div>
      <h1>External User</h1>
      {users.map((user) => (
        <Count name={user.name} email={user.email}></Count>
      ))}
    </div>
  );
}

const Count = (props) => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div className="count">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Increase</button>
    </div>
  );
}

// function ExternaUsers() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);
//   return (
//     <div>
//       <h3>External User</h3>
//       {users.map((user) => (
//         <User name={user.name} email={user.email}></User>
//       ))}
//     </div>
//   );
// }
// function User(props) {
//   return (
//     <div className="product">
//       <h2>Name: {props.name}</h2>
//       <p>Email: {props.email}</p>
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const handleIncrease = () => setCount(count + 1);
//   const handleDncrease = () => setCount(count - 1);
//   // console.log(useState);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={handleDncrease}>Dncrease</button>
//     </div>
//   );
// }

// function Product(props) {
//   const productStyle = {
//     border: "3px solid blue",
//     borderRadius: "10px",
//   };
//   return (
//     <div className="product" style={productStyle}>
//       <h2>Name: {props.name}</h2>
//       <h4>Price: {props.price}</h4>
//     </div>
//   );
// }

/*
const products = [
    {
      name: "mobile",
      price: 15000,
    },
    {
      name: "laptop",
      price: 150000,
    },
    {
      name: "watch",
      price: 1500,
    },
    {
      name: "camera",
      price: 5000,
    },
    {
      name: "shoe",
      price: 500,
    },
  ];

*/

/*
{products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
*/

/* 
<Product name="mobile" price="15000"></Product>
<Product name="mobile" price="15000"></Product>
<Product name="mobile" price="15000"></Product> 
*/
export default App;
