//All reusable funtions are placed here

//Suprise me funtion which randomly generates an image on the basis of file made in constants
import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  if (randomPrompt === prompt) return getRandomPrompt(prompt); //if previous image is same as the next one then run the function again
  return randomPrompt;
}
