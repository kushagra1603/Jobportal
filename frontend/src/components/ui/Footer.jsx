import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold mb-1">JobPortal</h2>
            <p className="text-sm">
              Helping you find your dream job quickly and easily. Explore
              opportunities across the globe with just a few clicks.
            </p>
          </div>

          {/* Useful Links */}
          <div className="mx-20">
            <h2 className="text-md font-semibold mb-1">Useful Links</h2>
            <ul className="space-y-1">
              <li>
                <Link to="/about" className="hover:text-gray-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="hover:text-gray-300 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termsofservice" className="hover:text-gray-300 text-sm">
                  Terms Of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-md font-semibold mb-1">Follow Us</h2>
            <ul className="flex space-x-3">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 text-sm"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 text-sm"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 text-sm"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-4 border-t border-gray-700 pt-4 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
