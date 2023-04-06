import express from "express";
import * as dotenv from "dotenv";
import Post from "../mongodb/models/posts.js";
dotenv.config();
const router = express.Router();

router.route("/").delete(async (req, res) => {
  console.log("recieved");
  try {
    const { photo } = req.body;
    await Post.deleteOne({ photo });
    res
      .status(200)
      .json({ success: "true", message: "Deleted Post Successfully" });
  } catch (error) {
    res.status(500).json({ success: "false", message: "Cant Find Post" });
  }
});

export default router;
