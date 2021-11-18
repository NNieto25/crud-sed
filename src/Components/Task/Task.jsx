import styles from './Task.module.css'
import {FiEdit, FiDelete} from 'react-icons/fi'

const Task = ({data, onUpdate, onDelete}) =>{
    const iconSize = 16;
    return (
        <div className={styles.task}>
            <p>{data.text}</p>
            <button onClick = {() => onUpdate(data._id)}><FiEdit size ={iconSize} /></button>
            <button onClick = {() => onDelete(data._id)}><FiDelete size = {iconSize}/></button>
        </div>
    );
};

export default Task;