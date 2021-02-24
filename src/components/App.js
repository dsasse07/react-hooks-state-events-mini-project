import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [activeCategory, setActiveCategory] = useState("All")
  const [tasks, setTasks] = useState(TASKS)


  function handleChangeCategory(newCategory){
    setActiveCategory(newCategory)
  }

  function handleNewTask(formData){
    const updatedTasks = [...tasks, formData]
    setTasks(updatedTasks)
  }

  function handleRemoveTasks(taskText){
    const updatedTasks = tasks.filter( ({text}) => text !== taskText)
    setTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter( ({category}) => {
    if (activeCategory === "All") return true
    return category === activeCategory
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        activeCategory={activeCategory} 
        onChangeActiveCategory={handleChangeCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={handleNewTask}
      />
      <TaskList tasks={filteredTasks} onTaskDelete={handleRemoveTasks}/>
    </div>
  );
}

export default App;
