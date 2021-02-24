import React, { useState } from "react";

function NewTaskForm( {categories, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({
    text: "",
    category: "Misc"
  })
  const {text, category} = formData

  const categoryOptions = 
    categories.filter ( category => { return category !== "All" })
      .map( category => { return (
        <option
          key={category}
          name="category"
          value={category} 
        >
          {category}
        </option>
      )}
)

  function handleFormChange(event){
    const key = event.target.name
    const value = event.target.value
    setFormData(formData => {return ({...formData, [key]:value })} )
  }

  function handleFormSubmit(event){
    event.preventDefault()
    onTaskFormSubmit({...formData})
    setFormData({
      text: "",
      category: "Misc"
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleFormChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleFormChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
