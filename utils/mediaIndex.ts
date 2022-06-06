import img1 from "../assets/carousel.png";
import img2 from "../assets/carousel.png";
import img3 from "../assets/carousel.png";
import img4 from "../assets/carousel.png";

export let media = [img1, img2, img3, img4];
export let mediaByIndex = (index: number) => media[index % media.length];
