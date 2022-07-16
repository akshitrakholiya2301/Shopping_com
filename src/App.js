import React from "react";
import Footer from "./commponents/Footer";
import Navbar from "./commponents/Navbar";
import Search from "./commponents/Search";
import Topcategories from "./commponents/Topcategories";
import Topdeals from "./commponents/topdeals/Topdeals";
import Topproducts from "./commponents/topdeals/Topproducts";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />

      <Search />

      <Topcategories />

      <Topdeals />
      <Topproducts />

      <Footer />
    </>
  );
}

export default App;
