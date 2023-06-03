import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const ShowTask = ({ data }) => {
  const [veri, setVeri] = useState(data);

  const handleClickButton = (id) => {
    console.log(id);
    setVeri(veri.filter((d) => d.id !== id));
  };

  return (
    <div>
      {veri.map((data) => {
        const { id, day, task, isDone } = data;

        return (
          <div className="showButon mt-5" key={id}>
            <h3>
              {task}{" "}
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
