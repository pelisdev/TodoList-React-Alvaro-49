// TodoList.jsx
import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');


  const addTask = () => {
    if (taskInput.trim() !== '') { 
      setTasks([...tasks, taskInput]); 
      setTaskInput(''); 
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); 
  };

  return (
    <div id="todo-list">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        placeholder="Agregar nueva tarea"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && addTask()}
      />
      <ul id="task-list">
        {tasks.length === 0 ? (
          <p id="no-tasks">Sin tareas, agrega más tareas...</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <span className="delete-task" onClick={() => deleteTask(index)}>
			  ✖️
              </span>
            </li>
          ))
        )}
      </ul>
      {tasks.length > 0 && ( 
        <div className="item-count">
          {tasks.length === 1 ? `${tasks.length} tarea pendiente` : `${tasks.length} tareas pendientes`}
        </div>
      )}
    </div>
  );
};

export default TodoList;