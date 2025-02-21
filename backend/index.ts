import express from "express";
import cors from "cors";
import pool from "./db";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(`Database connected: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error connecting to database");
  }
  // res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});