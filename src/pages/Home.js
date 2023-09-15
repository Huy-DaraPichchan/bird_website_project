import React from "react";
import Header from "./Header.js";
import Body from "./Body.js"
import Footer from "./Footer.js"


const PortfolioHomePage = () => {
  return (
    <div className=' bg-gray-100 min-h-screen font-mono'>
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
};

export default PortfolioHomePage;
