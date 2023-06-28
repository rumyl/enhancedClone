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
    title: "I Just Want To Be Killed",
    image: "https://mangasect.com/uploads/covers/i-just-want-to-be-killed.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/i-just-want-to-be-killed/239"
  },
  {
    title: "Sword Demon Island",
    image: "https://mangasect.com/uploads/covers/sword-demon-island.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/sword-demon-island/366"
  },
  {
    title: "If I Die, I will Be Invincible",
    image: "https://mangasect.com/uploads/covers/if-i-die-i-will-be-invincible.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/if-i-die-i-will-be-invincible/106"
  },
  {
    title: "Heir of Mythical Heroes",
    image: "https://mangasect.com/uploads/covers/heir-of-mythical-heroes.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/heir-of-mythical-heroes/579"
  },
  {
    title: "Solo Farming In The Tower",
    image: "https://mangasect.com/uploads/covers/solo-farming-in-the-tower.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/solo-farming-in-the-tower/384"
  },
  {
    title: "Martial Arts Reigns",
    image: "https://mangasect.com/uploads/covers/martial-arts-reigns.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/martial-arts-reigns/15"
  },
  {
    title: "I'm Just An Immortal",
    image: "https://mangasect.com/uploads/covers/i-m-just-an-immortal.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/i-m-just-an-immortal/137"
  },
  {
    title: "Since The Red Moon Appeared",
    image: "https://mangasect.com/uploads/covers/since-the-red-moon-appeared.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/since-the-red-moon-appeared/133"
  },
  {
    title: "Soul Land II",
    image: "https://mangasect.com/uploads/covers/douluo-dalu-ii-jueshi-tangmen.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/Soul-Land-IIa/139"
  },
  {
    title: "Here Comes the Godly Emperor: I Have Billions of Attribute Points",
    image: "https://mangasect.com/uploads/covers/here-comes-the-godly-emperor-i-have-billions-of-attribute-points.jpg",
    button: "Read Latest",
    link: "https://mangasect.com/manga/here-comes-the-godly-emperor-i-have-billions-of-attribute-points/111"
  },

];


function Manhua() {
  return (
    <>
      <main className="container mx-auto">
        
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
