import express from "express";
import dbcon from "./DBConfig/database.js";
import dotenv from "dotenv";
import cros from "cors";
import router from "./routes/Routes.js";
dotenv.config(); // Load environment variables from the .env file

const app = express();
const port = process.env.PORT || 3000;
app.use("", router);
app.use(cros());

dbcon.connect((err) => {
  if (err) {
    console.log("Database not connected:", err);
  } else {
    console.log("Database successfully connected");

    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  }
});
