import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./redux/containers/ProductsContainer";
import CartContainer from "./redux/containers/CartContainer";
import './App.css';
import MessageContainer from "./redux/containers/MessageContainer";

function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          {/* <!-- Message --> */}
          <MessageContainer />
          {/* <!-- Cart --> */}
          <CartContainer />
        </div>
      </main>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
