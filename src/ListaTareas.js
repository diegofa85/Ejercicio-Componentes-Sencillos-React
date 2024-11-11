import React, { useState } from 'react';

const ListaTareas = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Tarea 1', completed: false },
    { id: 2, text: 'Tarea 2', completed: false },
    { id: 3, text: 'Tarea 3', completed: false },
  ]);

  const cambioEstado = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="lista-tareas">
      <ul>
        {tasks.map((task) => (
          <li>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => cambioEstado(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;