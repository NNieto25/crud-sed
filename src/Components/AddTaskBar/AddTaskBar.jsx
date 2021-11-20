import styles from './AddTaskBar.module.css';
import {FaPlus} from 'react-icons/fa';
import { useState } from 'react';
const AddTaskBar = ({onAddTask}) => {
    const [text, setText] = useState('');
    const onChange = (e) =>{
        setText(e.target.value);
    }
    
    return(
        <div className={styles.bar}>
            <input type="text" onChange={onChange}/>
            <button onClick={() => {onAddTask(text); setText('');}}><FaPlus/> </button>
        </div>
    )
};

export default AddTaskBar;