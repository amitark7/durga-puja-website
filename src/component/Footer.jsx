import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[80%] m-auto gap-12 text-white">
        <div className="w-full py-10 flex flex-col items-start">
          <div className="mb-6">
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="text-2xl hover:text-gray-400 transition-all" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-2xl hover:text-gray-400 transition-all" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-gray-400 transition-all" />
              </a>
            </div>
            <h1 className="text-3xl font-bold mb-2">Your Website</h1>
            <p className="text-sm mb-2">857-891-7421</p>
            <p className="text-sm mb-6">amitark7.netlify.app</p>
            <p className="text-sm">
              &copy; 2035 by Inner Pieces.
              <br />
              Powered and secured by ❤️ Ark ❤️
            </p>
          </div>
        </div>

        <div className="py-10">
          <h1 className="font-bold text-2xl mb-4">Useful Links</h1>
          <p className="my-1">
            <a href="/">Home</a>{" "}
          </p>
          <p className="my-1">
            <a href="/">About</a>
          </p>
          <p className="my-1">
            <a href="/">Events</a>
          </p>
          <p className="my-1">
            <a href="/">Expenses</a>
          </p>
          <p className="my-1">
            <a href="/">Gallery</a>
          </p>
          <p className="my-1">
            <a href="/">Contact</a>
          </p>
        </div>

        <div className="py-10">
          <h1 className="font-bold text-2xl mb-4">Contact</h1>
          <p className="my-1">Durga Puja Samiti</p>
          <p className="my-1">Vill - Bathauli</p>
          <p className="my-1">Post - Tilrath</p>
          <p className="my-1">P.S - Barauni</p>
          <p className="my-1">Dist - Begusarai</p>
          <p className="my-1">Mob - +91 8578917421</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
