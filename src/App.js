import React from "react";
import Header from "./components/Header";
import Background from "./components/Background";
import ThreeScene from "./components/ThreeScene";

import Home from "./pages/Home";
import Burned from "./pages/Burned";
import AboutUs from "./pages/AboutUs";
import Tiers from "./pages/Tiers";
import Users from "./pages/Users";
import Features from "./pages/Features";
import WalletScanner from "./pages/WalletScanner";
import PrivateFilters from "./pages/PrivateFilters";
import Nft from "./pages/NFT";
import RoadMap from "./pages/RoadMap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Background />
      <ThreeScene />
      <Header />
      <Home />
      <AboutUs />
      <Tiers />
      <Burned />
      <Users />
      <Features />
      <WalletScanner />
      <PrivateFilters />
      <Nft />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
