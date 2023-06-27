"use client";
import { Button, Card } from 'flowbite-react';
import { Alert } from 'flowbite-react';
import Footer from "../layouts/Footer";
import "../assets/styles/index.css";


const cardItems = [
  {
    title: "Human $1/Month",
    button: "Join",
    description: "This will help us greatly! Thank you for your support! Help us buy Raws For a Chapter"
  },
  {
    title: "Mortal $3/Month",
    button: "Join",
    description: "This will help us greatly! Thank you for your support! Credits for the month you've subscribed Special role in our discord server! Discord access"
  },
  {
    title: "Immortal Realm $5/Month",
    button: "Join",
    description: "This is a rank higher than the innate realm, thank you for your support! Credits for the month you've subscribed Special role in our discord server! Discord access "
  },
  {
    title: "Celestial Core Realm $10/Month",
    button: "Join",
    description: "This is the realm above innate realm and celestial realm, thank you for your support! Credits for the month you've subscribed Special role in our discord server! Discord access "
  },
  {
    title: "Spirit Core Realm $15/Month",
    button: "Join",
    description: "This is the realm above innate realm and celestial realm, thank you for your support! Credits for the month you've subscribed Special role in our discord server! Discord access "
  },
  {
    title: "Virtual Disaster Realm $20/Month",
    button: "Join",
    description: "The highest realm we have right now, thank you for your support! Credits for the month you've subscribed Special role in our discord server! Discord access "
  },
  

];


function Patreon() {
  return (
    <>

      <main className="container mx-auto">
            <Alert
            color="warning"
            withBorderAccent
            >
            <span>
                <p>
                <span className="font-medium">
                58 PATRONS 75 POST
                </span>
                 &nbsp;creating manhua translations
                </p>
            </span>
            </Alert>
        <br/>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

        {cardItems.map( ({title, button, description}) => (

        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              {title}
            </p>
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
            {description}
            </p>
          </p>
          <Button>
            <p>
            {button}
            </p>
          </Button>
        </Card>
      ))}

     </div>
    </main>


      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        {/* Footer */}
      <Footer/>
      </>
  );
}

export default Patreon;
