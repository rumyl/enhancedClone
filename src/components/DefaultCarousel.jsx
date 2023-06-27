import { Carousel } from "flowbite-react";
import A1 from '../assets/images/a1.png'
import A2 from '../assets/images/a2.png'
import A3 from '../assets/images/a3.png'

function SlidingInterval() {
  return (
    <div className="relative" >
      <Carousel>
        <img className="relative"
          src={A1}
          alt="1"
        />
        <img  className="relative"
          src={A2}
          alt="2"
        />
         <img  className="relative"
          src={A3}
          alt="3"
        />
      </Carousel>
    </div>
  );
}

export default SlidingInterval;
