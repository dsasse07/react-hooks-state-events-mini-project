import React from "react";
import Task from "./Task"

function TaskList({ tasks, onTaskDelete }) {

  const taskComponents = tasks.map( ({text, category}) => {
    return <Task key={text} text={text} category={category} onTaskDelete={onTaskDelete}/>
  })

  return (
    <div className="tasks">
      {taskComponents}
    </div>
  );
}

export default TaskList;
