import express from "express";
import router from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.redirect("/swagger");
});

app.listen(PORT, () => {
  console.log(`Server up at port: ${PORT}`);
});
