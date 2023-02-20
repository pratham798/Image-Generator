import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/posts.js";
import { get } from "mongoose";

dotenv.config();
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloud_name: process.env.CLOUDINARY_API_KEY,
  cloud_name: process.env.CLOUDINARY_API_SECRET,
});

//CREATE POSTS
//General Method To Create Posts
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, image } = req.body;
    const photoUrl = await cloudinary.uploader.upload(image);
    const newPost = await Post.create({
      name,
      prompt,
      image: photoUrl,
    });
    res.status(201).json({ success: "true", data: newPost });
  } catch (error) {
    res.status(500).json({ success: "false", message: error });
  }
});

//GET POSTS
//general method to display posts

router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: "true", data: newPost });
  } catch (error) {
    res.status(500).json({ success: "false", message: error });
  }
});

export default router;
