import React from "react";
import Footer from "./commponents/Footer";
import Navbar from "./commponents/Navbar";
import Search from "./commponents/Search";
import Topcategories from "./commponents/Topcategories";
import Topdeals from "./commponents/topdeals/Topdeals";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Topcategories />
      <Topdeals />
      <Footer />
    </>
  );
}

export default App;
