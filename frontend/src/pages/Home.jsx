import React from "react";
import Hero from "../components/Home/Hero";
import Biography from "../components/Home/Biography";
import Departments from "../components/Home/Departments";
import MessageForm from "../components/Home/MessageForm";
const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
