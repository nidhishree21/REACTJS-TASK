import imageUrls from "../shared/imageUrls";
import { imageData } from "./rawData";

const images = imageData.map(image => {
  image.src = imageUrls[image.src];
  return image;
});

export default images;
