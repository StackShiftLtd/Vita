import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (window.scrollY > 50) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("bg-blue-950");
      } else {
        navbar.classList.remove("bg-blue-950");
        navbar.classList.add("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const location = useLocation();
const path = location.pathname;

  return (
    <>
      <nav className="text-white flex justify-between items-center fixed w-full top-0 left-0 z-10 bg-transparent transition-all duration-300">
        <img
          className="mx-3 my-2"
          src="./src/assets/logo/logo-white.webp"
          alt="Logo"
          id="logo1"
        />
        <ul className="hidden md:flex items-center space-x-10">
          <li className="font-semibold group">
            <Link
              to="/"
              className={`flex items-center relative pb-2 transition duration-300 ease-in-out ${path==="/" ?"text-blue-600 hover:text-white" :"text-white hover:text-blue-600"}`}
            >
              Home
              <span className={`absolute bottom-0  ${path==="/" ? "left-1/4 w-1/2 h-[2px] bg-blue-600" : "w-0 h-[2px] bg-blue-600 transition-all duration-500 group-hover:w-1/2" }`}></span>
            </Link>
          </li>
          <li className="relative group">
            <button className={`flex items-center pb-2 transition duration-300 ease-in-out focus:outline-none font-semibold ${path.startsWith("/compliance") ? "text-blue-600 hover:text-white" :"text-white hover:text-blue-600"} `}>
              Compliance
              <span className={`absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-500 ${path.startsWith("/compliance") ? "w-1/3" : "w-0 group-hover:w-1/3"} `}></span>
              <svg
                className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-55 bg-white border border-gray-200 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out transform -translate-y-2 z-20">
              <Link
                to="/compliance/information-security-policy"
                className={`flex justify-between items-center px-4 py-2 transition duration-200 ease-in-out ${path === "/compliance/information-security-policy" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
              >
                Information Security Policy
              </Link>
              <Link to="/compliance/roles-and-responsibility"
                className={`flex justify-between items-center px-4 py-2 transition duration-200 ease-in-out ${path === "/compliance/roles-and-responsibility" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
              >
                Roles and Responsibilities
              </Link>
              <Link to ="/compliance/business-impact"
                 className={`flex justify-between items-center px-4 py-2 transition duration-200 ease-in-out ${path === "/compliance/business-impact" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
              >
                Business Impact
              </Link>
              <Link to="/compliance/it-system-data"
                className={`flex justify-between items-center px-4 py-2 transition duration-200 ease-in-out ${path === "/compliance/it-system-data" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
              >
                IT System and Data Sensitivity
              </Link>
              <Link to ="/compliance/senitive-it-inventory"
                className={`flex justify-between items-center px-4 py-2 transition duration-200 ease-in-out ${path === "/compliance/senitive-it-inventory" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
              >
                Sensitive IT Inventory
              </Link>
              <Link to ="/compliance/risk-assessment"
                className={`flex justify-between items-center px-4 py-2 transition duration-200 ease-in-out ${path === "/compliance/risk-assessment" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
              >
                Risk Assessment
              </Link>
              <Link to ="/compliance/it-security-audits"
                className={`flex justify-between items-center px-4 py-2 transition duration-200 ease-in-out ${path === "/compliance/it-security-audits" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
              >
                IT Security Audits
              </Link>
              <Link to ="/compliance/security-control-catalog"
                className={`flex justify-between items-center px-4 py-2 transition duration-200 ease-in-out ${path === "/compliance/security-control-catalog" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
              >
                Security Control Catalog
              </Link>
              <Link to ="/compliance/sec-540"
                className={`flex justify-between items-center px-4 py-2 transition duration-200 ease-in-out ${path === "/compliance/sec-540" ? "text-blue-600 bg-blue-50" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`}
              >
                SEC-540 Classification
              </Link>
            </div>
          </li>
          <li className="relative group">
            <button className="flex items-center text-white pb-2 hover:text-blue-600 font-semibold transition duration-500 ease-in-out focus:outline-none">
              Services
              <span className="absolute bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-500 group-hover:w-1/3"></span>
              <svg
                className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-55 bg-white border border-gray-200 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out transform -translate-y-2 z-20">
              <a
                href=""
                className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 ease-in-out"
              >
                Cyber Range
              </a>
              <a
                href=""
                className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 ease-in-out"
              >
                Departmental Tabletop Exercises
              </a>
              <a
                href=""
                className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 ease-in-out"
              >
                Vulnerability Assessment and Penetration Testing
              </a>
              <a
                href=""
                className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 ease-in-out"
              >
                SOC as a Service
              </a>
            </div>
          </li>
          <li className="relative group">
            <button className="flex items-center text-white pb-2 hover:text-blue-600 font-semibold transition duration-500 ease-in-out focus:outline-none">
              Pricing
              <span className="absolute bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-500 group-hover:w-1/3"></span>
              <svg
                className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-55 bg-white border border-gray-200 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out transform -translate-y-2 z-20">
              <a
                href=""
                className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 ease-in-out"
              >
                Basic Plan
              </a>
              <a
                href=""
                className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 ease-in-out"
              >
                Standard Plan
              </a>
              <a
                href=""
                className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 ease-in-out"
              >
                Premium Plan
              </a>
            </div>
          </li>
          <li className="relative group">
            <button className="flex items-center text-white pb-2 hover:text-blue-600 font-semibold transition duration-500 ease-in-out focus:outline-none">
              About Us
              <span className="absolute bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-500 group-hover:w-1/3"></span>
              <svg
                className="ml-1 w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-55 bg-white border border-gray-200 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out transform -translate-y-2 z-20">
              <a
                href=""
                className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 ease-in-out"
              >
                Contact Us
              </a>
            </div>
          </li>
        </ul>
        <a href="">
          <button className="border-1 hover:bg-blue-900 text-white py-2 px-3 rounded-md transition duration-300 ease-in-out hover:shadow-lg m-2">
            Login to CSM
          </button>
        </a>
      </nav>
    </>
  );
}
