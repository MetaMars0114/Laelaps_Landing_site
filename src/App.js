import React, {useState, useEffect } from "react";
import './App.css';
import { Intro } from "./components/Intro";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Tiers } from "./components/tiers";
import { Wallet } from "./components/wallet";
import { Private } from "./components/private";
import { NFT } from "./components/nft";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import Background from "./components/Background";
import {VideoBg} from "./components/VideoBg";
import { Footer } from "./components/footer";
import {Burned} from "./components/burned";
import {Users} from "./components/users";
import {Header} from "./components/Header";

function App() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="App">
      <VideoBg/>
      <Background />
      <Header />
      <Intro />
      <About data={landingPageData.About} />
      <Tiers data={landingPageData.Tiers} />
      <Features data={landingPageData.Features} />
      <Burned />
      <Users />
      <Wallet data={landingPageData.Wallet} />
      <Private data={landingPageData.Private} />
      <NFT data={landingPageData.NFT} />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  );
}

export default App;
