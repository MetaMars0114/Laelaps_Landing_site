import React, {useState, useEffect } from "react";
import './App.css';
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Tiers } from "./components/tiers";
import { Wallet } from "./components/wallet";
import { Private } from "./components/private";
import { NFT } from "./components/nft";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import Background from "./components/Background";

function App() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      <Background />
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Tiers data={landingPageData.Tiers} />
      <Features data={landingPageData.Features} />
      <Wallet data={landingPageData.Wallet} />
      <Private data={landingPageData.Private} />
      <NFT data={landingPageData.NFT} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
}

export default App;
