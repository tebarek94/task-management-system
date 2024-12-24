import express from "express";
import cors from "cors";
import dbcon from "../DBConfig/database.js"; // Assuming dbcon is your MySQL connection object

const router = express.Router();
router.use(cors());

router.get("/", (req, res) => {
  const sql = "SELECT * FROM tasks";

  // Use a callback to handle the query response
  dbcon.query(sql, (err, result) => {
    if (err) {
      // If there's an error, respond with an error message
      console.error("Error executing query:", err);
      return res.status(500).json({
        message: "An error occurred while retrieving tasks",
        error: err,
      });
    }

    console.log(result);
    res.status(200).json(result);
  });
});
router.post("/add", (req, res) => {
  const { title, description } = req.body;

  // Check if title and description are provided
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required." });
  }

  // Insert the task into the database
  const sql = "INSERT INTO tasks (title, description) VALUES (?, ?)";
  dbcon.query(sql, [title, description], (err, result) => {
    if (err) {
      console.error("Error inserting task:", err);
      return res.status(500).json({ message: "Error adding task." });
    }

    return res
      .status(201)
      .json({ message: "Task added successfully", taskId: result.insertId });
  });
});

export default router;
