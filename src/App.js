import React from "react";
import Footer from "./commponents/Footer";
import Navbar from "./commponents/Navbar";
import Search from "./commponents/Search";
import Topcategories from "./commponents/Topcategories";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <hr></hr>
      <Topcategories />
      <Footer />
    </>
  );
}

export default App;
