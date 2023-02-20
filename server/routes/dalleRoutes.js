import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello From DALL-E!");
});

router.route("/").post(async (req, res) => {
  //try consist of all the code that can have some error which is then handled by catch
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data.data[0].b64_json;
    //without .json we can only pass a string in res.send so with json we can pass anything in the form of an json i.e object key value pair
    res.status(200).json({ photo: image }); //their are specif status codes for specific operations 200 means success
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message); // 500 means error in our code so if this error occurs then do the following
  }
});

export default router;
