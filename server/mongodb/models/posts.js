import mongoose from "mongoose";

//Creating structure
const Post = mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
});

//Creating mmodel of that structure
const PostSchema = mongoose.model("Post", Post);
export default PostSchema;
