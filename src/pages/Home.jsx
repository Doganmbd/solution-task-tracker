import React, { useState } from "react";
import Header from "../components/Header";
import ShowTask from "../components/ShowTask";
import { useEffect } from "react";
/* import data from "../helper/starterData"; */

const Home = () => {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("locData")) || []
  );

  useEffect(() => {
    localStorage.setItem("locData", JSON.stringify(localData));
  }, [localData]);

  console.log(localData);
  /* console.log(data); */
  return (
    <div className="container mt-5">
      <Header localData={localData} setLocalData={setLocalData} />
      <ShowTask
        localData={localData}
        setLocalData={setLocalData} /* data={data} */
      />
    </div>
  );
};

export default Home;
