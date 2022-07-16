import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  const categoryChosen = categories.map((category, index) => (
    <option key={index}>{category}</option>
  ));

  function handleSubmit(e) {
    e.preventDefault();
    setText("");
    onTaskFormSubmit({ text, category });
    setCategory("Code");
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          {/* render <option> elements for each category here */}
          {categoryChosen}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
