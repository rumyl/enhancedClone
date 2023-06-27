import React from "react";
import { Card } from "flowbite-react";
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";
import c5 from "../assets/images/c5.jpg";
import c6 from "../assets/images/c6.jpg";
import c7 from "../assets/images/c7.jpg";
import c8 from "../assets/images/c8.jpg";
import c9 from "../assets/images/c9.png";
import c10 from "../assets/images/c10.jpg";
import Page from "../layouts/Pagination";
import Footer from "../layouts/Footer";
import "../assets/styles/index.css";
import DefaultCarousel from "../components/DefaultCarousel";




const cardItems = [
  {
    title: "Tales Of Demons And Gods",
    image: c1,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/tales-of-demons-and-gods/"
  },
  {
    title: "Martial Peak",
    image: c2,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/martial-peak01/"
  },
  {
    title: "Yuan Zun",
    image: c3,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/yuan-zun/"
  },
  {
    title: "Peerless Battle Spirit",
    image: c4,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/peerless-battle-spirit/"
  },
  {
    title: "Demon Magic Emperor",
    image: c5,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/demon-magic-emperor01/"
  },
  {
    title: "Apotheosis",
    image: c6,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/apotheosis/"
  },
  {
    title: "Versatile Mage",
    image: c7,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/versatile-mage/"
  },
  {
    title: "Soul Land V",
    image: c8,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/soul-land-v/"
  },
  {
    title: "Global Martial Arts",
    image: c9,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/global-martial-arts/"
  },
  {
    title: "Cultivator Against Hero Society",
    image: c10,
    button: "Read Latest",
    link: "https://manhuaplus.com/manga/cultivator-against-hero-society/"
  },

];


function Manhua() {
  return (
    <>
      <main className="container mx-auto">
        <DefaultCarousel />
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      
        {cardItems.map( ({title, image, button, link}) => (
        <Card
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={image}>

        <h5 className="text-1xl font-bold text-center text-gray-900 dark:text-white">
          <p>
            {title}
          </p>
        </h5>
        
        <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <a href={link}>{button}</a>
        </div>

      </Card>
      ))}

     </div>
    </main>
      <Page/>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        
      <Footer/>
      </>
  );
}

export default Manhua;
