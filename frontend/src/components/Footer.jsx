import footerLogo from "../assets/footer-logo.png";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 sm:px-10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#home" className="hover:text-primary-regular">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary-regular">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary-regular">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary-regular">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates, news, and
            offers!
          </p>
          <div className="flex">
            <input
              id="email-subscribe"
              type="email"
              placeholder="Enter your email"
              className="bg-white w-full px-4 py-2 rounded-l-md text-black placeholder:text-grey-500"
            />
            <button className="bg-primary-regular px-6 py-2 rounded-r-md hover:bg-gray-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <a href="#privacy" className="hover:text-primary-regular">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#terms" className="hover:text-primary-regular">
              Terms of Service
            </a>
          </li>
        </ul>

        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-regular"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-regular"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-regular"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
