import { useEffect, useState } from 'react';
import './App.css';
import AddTaskBar from './Components/AddTaskBar/AddTaskBar';
import Task from './Components/Task/Task';
import {createTask, getTasks, updateTask, deleteTask} from './Helpers/Tasks'

function App() {
  const [tasks, setTasks] = useState([]);
  const [reRender, setReRender] = useState(false);
  
  const create = async (text) => {
    const created = await createTask(text);
    if(created){
      setReRender(!reRender);
    }
    else{ 
      alert("Error al crear la task.");
    }
  }

  const update = async (id) => {
    const text = window.prompt("Ingrese el nuevo contenido de la Task");
    const updated = await updateTask(id, text);
    if(updated){
      setReRender(!reRender);
    }
    else{
      alert("Error al actualizar la task.");
    }  
  }

  const deleteItem = async (id) => {
    const deleted = await deleteTask(id);
    if(deleted){
      setReRender(!reRender);
    }
    else{
      alert("Error al borrar la task.");
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      setTasks(response);
    }
    
    fetchTasks();

  },[reRender]);

  return (
    <div className="App">
      <AddTaskBar onAddTask = {create}/>
      <h1>Tasks</h1>
      {tasks.map((task) => {
        return (
          <Task data={task} onUpdate={update} onDelete={deleteItem} key ={task._id} />
        );
      })}
    </div>
  );
}

export default App;
