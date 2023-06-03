import { FaTimesCircle } from 'react-icons/fa';

const ShowTask = ({data}) => {
  return (
    <div>
      {data.map((data)=> {
      const {id,day,task,isDone} = data

      return (
        <div className="showButon mt-5" key={id}>
        <h3>{task} <FaTimesCircle/></h3>
        
        <h6>{day}</h6>
      </div>
        
        )
      
      
      })}
      
    </div>
  );
};

export default ShowTask;
