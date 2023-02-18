import express from "express";
import cors from "cors"; //cors acts a a middleware which applies certain conditons to urls/requests ex-specific name of host
import * as dotenv from "dotenv";
import connectDB from "./mongodb/connect.js"; //always mention .js after file name otherwise it gives error in nodejs
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors()); // here we haven't put any condition so middleware is allowing all the urls/requests
app.use(express.json({ limit: "50mb" })); //all the calls made are in form of JSON so we have put a limit of 50mb
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8888, () =>
      console.log("Server has started on port http://localhost:8888")
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();
