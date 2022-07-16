import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const listOfTasks = tasks.map((task, index) => (
    <Task
      key={index}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {listOfTasks}
    </div>
  );
}

export default TaskList;
