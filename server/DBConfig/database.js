import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const dbcon = mysql.createConnection({
  database: process.env.database,
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
});
export default dbcon;
