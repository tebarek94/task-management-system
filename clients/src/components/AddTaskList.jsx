import React, { useState } from "react";

function AddTaskList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  // handle form submission or some logic for making the request
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission

    if (!title || !description) {
      setError("Both title and description are required.");
      return;
    }

    const taskData = { title, description };

    try {
      const response = await fetch("http://localhost:5000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error("Error adding task.");
      }

      const data = await response.json();
      console.log("Task added:", data); // Handle the success (you can show a success message here)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Add a task list</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Task</button>
      </form>

      {/* Display error */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default AddTaskList;
