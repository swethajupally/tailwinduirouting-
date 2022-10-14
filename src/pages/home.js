import React from "react";
import Mainpage from "../components/mainpage";
import Banner from "../components/banner";
import Signin from "../components/signin";

function Home() {
  return (
    <div>
      <Mainpage />
      <Banner />
      <Signin />
    </div>
  );
}

export default Home;