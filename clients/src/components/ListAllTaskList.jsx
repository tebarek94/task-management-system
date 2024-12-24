import React, { useEffect, useState } from "react";
import "./ListAllTaskList.css"; // Import the CSS file

function ListAllTaskList() {
  const [taskList, setTaskList] = useState([]);

  // Fetch tasks from backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => setTaskList(data)) // Set the state with the JSON data
      .catch((error) => console.error("Error fetching tasks:", error)); // Handle errors
  }, []);

  // Handle delete action (just a placeholder for now)
  const handleDelete = (id) => {
    console.log(`Delete task with ID: ${id}`);
    // Logic to delete the task will go here
  };

  // Handle edit action (just a placeholder for now)
  const handleEdit = (id) => {
    console.log(`Edit task with ID: ${id}`);
    // Logic to edit the task will go here
  };

  return (
    <div className="task-list-container">
      <h1>List All Tasks</h1>
      <table className="task-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.completed ? "Completed" : "Pending..."}</td>
              <td>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(task.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAllTaskList;
