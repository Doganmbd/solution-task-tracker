/* import { useState } from "react"; */
import { FaTimesCircle } from "react-icons/fa";

const ShowTask = ({setLocalData,localData /* data */ }) => {
  /* const [veri, setVeri] = useState(data); */

  const handleClickButton = (id) => {
    /* console.log(id); */
    setLocalData(localData.filter((d) => d.id !== id));
  };

  const handleToggle = (id) => {
    setLocalData(
      localData.map((item) => {
        return item.id === id ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };
/*  console.log(veri); */

  return (
    <div>
      {localData.map((data) => {
        const { id, day, task, isDone } = data;

        return (
          <div
            onDoubleClick={() => {
              handleToggle(id);
            }}
            className={`showButon ${isDone ? "done" : ""} mt-3 `}
            key={id}
          >
            <h3>
              {task}
              <FaTimesCircle
                onClick={() => handleClickButton(id)}
                className="text-danger"
              />
            </h3>

            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default ShowTask;
