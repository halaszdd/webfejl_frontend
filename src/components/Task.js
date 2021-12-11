import  { FaTimes, FaRegStar, FaMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>
            {task.name}
            <FaTimes style={{color: 'red', cursor: 'pointer'}} 
            onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.rarity}<FaRegStar style={{color: 'gold'}}/></p>
            <p>{task.sex}</p>
            <p>{task.vision}</p>
            <p>{task.constellation}</p>
        <Link to={`/edit/${task.id}`}> Modify<FaMarker style={{color: 'green'}}/></Link>
        </div>
    )
}

export default Task
