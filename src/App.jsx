import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from './components/about/About'
import Nav from "./components/nav/Nav";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About></About>
      <Footer></Footer>
    </>
  );
};

export default App;
