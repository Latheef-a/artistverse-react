import directorImg from "../assets/images/director.jpeg";
import directorWork1 from "../assets/images/director1.jpg";
import directorWork2 from "../assets/images/director2.webp";

import musicImg from "../assets/images/music.jpg";
import musicwork1 from "../assets/images/music1.webp";

import photoImg from "../assets/images/photo.jpg";
import photowork1 from "../assets/images/photo1.jpg";

import sketchImg from "../assets/images/sketch.jpg";
import sketchwork1 from "../assets/images/sketch1.jpg";

const artists = [
  {
    id: 1,
    name: "S.S. RAJAMOULI",
    category: "Director",
    image: directorImg,
    about: "Koduri Srisaila Sri Rajamouli is an Indian filmmaker, screenwriter who works in Telugu cinema.",
    works: [directorWork1, directorWork2],

  },
  {
    id: 2,
    name: "B. Ajaneesh Loknath",
    category: "Music",
    image: musicImg,
    about: "B. Ajaneesh Loknath is an Indian music composer who works predominantly in Kannada and Telugu films. ",
    works: [musicwork1],
  },
  {
    id: 3,
    name: "Abhimanyu Sharma",
    category: "Photography",
    image: photoImg,
    about: "Abhimanyu Sharma is a prominent Indian wedding photographer and a Canon EOS Maestro based in New Delhi.",
    works: [photowork1],
  },
  {
    id: 4,
    name: "Sadashivv Sawant",
    category: "Sketch",
    image: sketchImg,
    about: "Sadashivv Sawant is a renowned Indian hyper realistic pencil artist,educator, and the founder of Pencil Perceptions Academy.",
    works: [sketchwork1],
  },
];

export default artists;
