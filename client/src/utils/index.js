//All reusable funtions are placed here

//Suprise me funtion which randomly generates an image on the basis of file made in constants
import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt(prompt); //if previous image is same as the next one then run the function again
  return randomPrompt;
}

// I added a delete function if you need it:

// in postRoutes.js:
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

// in utils/index.js
// export async function deleteImage(_id) {
//     try {
//     const response = await fetch('http://localhost:8080/api/v1/post', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ _id }),
//       });

//       await response.json();
//     }
//     catch (error) {
//         alert(error)
//     } finally {
//         location.reload();
//     }
// }

// in components/card.jsx (don't forget to download your own delete icon and import it):
// <button type="button" onClick={() => deleteImage(_id)} className="outline-none bg-transparent border-none">
//  <img src={deleteicon} alt="delete" className="w-6 h-6 object-contain invert"/>
//  </button>
