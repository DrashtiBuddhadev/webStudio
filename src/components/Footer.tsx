import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-newsreader text-xl font-medium mb-4">
              <span>Web</span>Studio
            </h3>
            <p className="text-gray-600 mb-4 max-w-xs">
              Creating modern, sleek and professional digital experiences with a
              touch of pastel elegance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="h-10 w-10 rounded-full bg-pastel-blue flex items-center justify-center transition hover:bg-pastel-blue/80"
              >
                <svg
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.44379 12.0852 6.2708C11.7135 7.0978 11.6273 8.0163 11.84 8.89997C10.2094 8.81854 8.61444 8.40169 7.15865 7.68335C5.70287 6.96501 4.41885 5.95814 3.39 4.72997C3.02914 5.38837 2.83952 6.13092 2.84 6.88997C2.83872 7.59183 3.00422 8.28139 3.32176 8.90082C3.63929 9.52024 4.09752 10.0475 4.66 10.44C4.00798 10.4207 3.36989 10.2347 2.8 9.89997V9.94997C2.80489 10.8968 3.13599 11.8133 3.73731 12.5261C4.33864 13.239 5.17326 13.7065 6.1 13.84C5.74326 13.9347 5.37285 13.9829 5 13.9833C4.74189 13.9798 4.48442 13.9541 4.23 13.9067C4.49391 14.7202 5.00462 15.4335 5.69107 15.9478C6.37753 16.4621 7.20558 16.7533 8.06 16.78C6.6172 17.9226 4.83588 18.5398 3 18.54C2.66574 18.5403 2.33174 18.5203 2 18.48C3.87443 19.7083 6.05881 20.3508 8.29 20.34C9.82969 20.3575 11.3571 20.0553 12.7831 19.4518C14.2091 18.8484 15.505 17.9574 16.5952 16.8356C17.6854 15.7138 18.5478 14.394 19.1272 12.9522C19.7066 11.5104 19.9905 9.97562 19.958 8.43597L19.95 8.01997C20.7577 7.4411 21.4549 6.7121 22 5.87997L22 5.79997Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-pastel-pink flex items-center justify-center transition hover:bg-pastel-pink/80"
              >
                <svg
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-pastel-purple flex items-center justify-center transition hover:bg-pastel-purple/80"
              >
                <svg
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-newsreader text-lg font-medium mb-4">
              Sitemap
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-600 hover:text-primary transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-newsreader text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-600 hover:text-primary transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-newsreader text-lg font-medium mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3" />
                <span className="text-gray-600">
                  Green Park Society, Ahmedabad, Gujarat, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-600">+91 8866207909</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-600">hello@WebStudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center">
              © 2025 WebStudio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
