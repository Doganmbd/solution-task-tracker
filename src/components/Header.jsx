import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = ({ localData, setLocalData }) => {
  const [showAdd, setShowAdd] = useState(false);
  const [change, setChange] = useState({
    name: "SHOW ADD TASK BAR",
    bgColor: "purple",
  });

  const handleClick = () => {
    if (showAdd) {
      setChange({
        name: "SHOW ADD TASK BAR",
        bgColor: "purple",
      });
    } else {
      setChange({
        name: "CLOSE ADD TASK BAR",
        bgColor: "red",
      });
    }
    setShowAdd(!showAdd);
  };

  //! React, default olarak state'leri hemen degistirmeyebilir.
  //! Ekstra render'lari azaltmak icin state'leri toplu (batch) bir sekilde gunceller.
  //! Bir event handler icerisindeki ardasik state'ler event bitiminde toplu bir sekilde guncellenmis olur.State'lerin guncelenmesi gelis sirasina gore yapilir.
  //! Ayni event icerisinde birbirine bagli state'leri kullanirken buna dikkat etmek gerkir.

  //? https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates

  return (
    <div className="header">
      <h1>TASK TRACKER</h1>
      <button
        style={{ backgroundColor: change.bgColor }}
        onClick={handleClick}
        className="btn btn-danger btn-lg m-5 shadow p-3 mb-5 "
      >
        {change.name}
      </button>

      {showAdd && (
        <AddTaskForm localData={localData} setLocalData={setLocalData} />
      )}
    </div>
  );
};

export default Header;
