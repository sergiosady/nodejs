import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://sergiosady:jbeRUgHQSj5y9DkP@clustersimulador.dgpxx2e.mongodb.net/simulador?appName=ClusterSimulador",
);

mongoose.connection.on("connected", () => {
  console.log("Connected to database successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect to database", err.message);
});

export default mongoose;
