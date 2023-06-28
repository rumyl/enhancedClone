import { Navbar } from "flowbite-react";
import Logo from "../components/Logo";
import "../assets/styles/index.css";
import { Outlet, Link } from "react-router-dom";


function Header() {
  return (
    <>
    <header className="">
      <Navbar fluid className="!bg-pink">
        <Navbar.Brand href="https://manhuaplus.com/">
          <Logo />

            <p className="leading-none pr-9">
              <span className="navtitle-md font-semibold text-white pl-8">HOME</span>
            </p>

            <p className="leading-none pr-9">
            <Link to ="Contact"><span className="navtitle-md font-semibold text-white  pl-8">CONTACT US</span></Link>
            </p>   
       
        </Navbar.Brand>

        <div className="flex items-center ml-4 rounded-lg p-6">
          <button type="button" class="text-white bg-yellow-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Icon description</span>
          </button>
            <span className="navtitle-md font-semibold text-white pr-8 pl-8">
              Advanced
            </span>
        </div>
       
      </Navbar>
      <div className="items-left bg-white-100 p-2">
        
        <div className="ml-auto p-4 pl-11">
        <Link to = "Manhua" className="text-green-800 hover:text-pink ml-4 pl-10">
            MANHUA
          </Link>
          <Link to="Manga" className="text-green-800 hover:text-pink ml-4 pl-5">
            MANGA SECT
         </Link>
          <Link to="Patreon" className="text-green-800 hover:text-pink ml-4 pl-5">
            PATREON
         </Link>
          <Link to="Donations" className="text-green-800 hover:text-pink ml-4 pl-5">
            DONATIONS
         </Link>
          <Link to="More" className="text-green-800 hover:text-pink ml-4 pl-5">
            MORE   
         </Link>

          <Link to="Registration" className="text-black hover:text-pink float-right pr-5">
            <button type="button" class=" px-5 mr-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-white rounded-full border border-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SIGN UP</button>
         </Link>
          <Link to="Login" className="text-black hover:text-pink float-right">
            <button type="button" class=" px-5 mr-2 mb-2 text-sm text-gray-900 focus:outline-none bg-white rounded-full border border-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SIGN IN</button>
         </Link>
        </div>
        
        </div>
        
    </header>
    <div id="detail">
         <Outlet />
    </div>
    </>
  );
}

export default Header;
