import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected")) //then is always used after an action is succesfully completed
    .catch((err) => console.log(err)); //otherwise if the action cannot be carried out then we use catch
};
export default connectDB;
