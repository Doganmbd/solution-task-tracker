import React from "react";
import Header from "../components/Header";
import ShowTask from "../components/ShowTask";
import data from "../helper/starterData";

const Home = () => {

  console.log(data);
  return (
    <div className="container mt-5">
      <Header />
      <ShowTask data={data}/>
    </div>
  );
};

export default Home;
