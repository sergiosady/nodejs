import mongoose from "mongoose";
import "dotenv/config";

const mongoDb = process.env.DB_CONN_STRING;

mongoose.connect(mongoDb);

mongoose.connection.on("connected", () => {
  console.log("Connected to database successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect to database", err.message);
});

export default mongoose;
