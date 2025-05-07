'use client'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondary text-white py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Section 1: Logo and About */}
        <div className="flex items-center space-x-4 ">
          {/* Logo */}
          <img
            src="/Images/olo.png" // Replace with the actual path to your logo
            alt="TaleScape Logo"
            className="h-24 w-auto" // Adjust size as needed
          />

          {/* Text Content */}
          <div>
            <h3 className="text-2xl text-white font-bold mb-2">TaleScape</h3>
            <p className="text-sm text-white leading-relaxed">
              Craft magical, personalized stories for kids with ease. Unleash the power
              of creativity and bring joy to young readers everywhere.
            </p>
          </div>
        </div>


        {/* Section 2: Quick Links */}
        <div className="ml-24">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-fourth transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-fourth transition">
                Features
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-fourth transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-fourth transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-pink-400 rounded-full hover:bg-third transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-pink-400  rounded-full hover:bg-third transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-pink-400  rounded-full hover:bg-third transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-pink-400  rounded-full hover:bg-third transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Section 4: Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-700"
            />
            <button
              type="submit"
              className="bg-third text-white py-2 rounded-lg hover:bg-primary transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-fourth pt-4 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm text-white ">&copy; 2024 TaleScape. All Rights Reserved.</p>
        <div className="flex space-x-6 text-sm">
          <a href="/privacy" className="hover:text-fourth transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-fourth transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
