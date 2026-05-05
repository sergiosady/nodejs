import express from "express";
import router from "./routes/index.js";
import mongoose from "./config/database.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.json("API is running");
});

app.listen(PORT, () => {
  console.log(`Server up @ http://localhost:${PORT}`);
});
