import express from "express";
import router from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
  response.send("Hello world.");
});

app.listen(PORT, () => {
  console.log(`Server up at port: ${PORT}`);
});
