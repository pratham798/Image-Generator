//All reusable funtions are placed here

//Suprise me funtion which randomly generates an image on the basis of file made in constants
import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt(prompt); //if previous image is same as the next one then run the function again
  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
// I added a delete function if you need it:
// router.route('/').delete(async(req, res) => {
//     try {
//         const { _id, photo} = req.body;
//         const photoNametoDelete = photo.slice(61, -4);
//         // Delete on Cloudinary
//         await cloudinary.uploader.destroy(photoNametoDelete);
//         // Delete on MongoDB Atlas
//         const deletePost = await Post.deleteOne({
//             _id
//         })
//         res.status(201).json({success: true, data: deletePost});
//     } catch(error) {
//         res.status(500).json({success: false, message: 'Unable to delete post, please try again'})
//     }
// });
