import { FaAngleRight } from "react-icons/fa";
export default function Footer() {
  return (
    <footer id="footer" className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 text-white p-5 gap-10">
        <div className="mt-8">
          <img src="./src/assets/logo/logo-white.webp" alt="logo" />
          <p className="mt-5 mr-5">
            Software Productivity Strategists, Inc. (SPS) delivers AI and
            Cloud-powered industry solutions. With expertise across design,
            development, security, and operations, we build scalable, secure,
            and reliable systems. Our award-winning team includes IBM-certified
            inventors and global competition champions.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
            Compliance
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href=""
                className="hover:text-[#0d69da] transition-colors duration-300 ease-linear flex items-center"
              >
                <FaAngleRight/>Information Security Policy
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#0d69da] transition-colors duration-300 ease-linear flex items-center"
              >
                <FaAngleRight/>Roles and Responsibilities
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#0d69da] transition-colors duration-300 ease-linear flex items-center"
              >
                <FaAngleRight/>Business Impact Analysis
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#0d69da] transition-colors duration-300 ease-linear flex items-center"
              >
                <FaAngleRight/>IT System and Data Sensitivity Classification
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#0d69da] transition-colors duration-300 ease-linear flex items-center"
              >
                <FaAngleRight/>Sensitive IT System Inventory and Definition
              </a>
            </li>
            
          </ul>
        </div>

         <div className="mt-8">
          <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
            Services
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href=""
                className="hover:text-[#0d69da] transition-colors duration-300 ease-linear flex items-center"
              >
                <FaAngleRight/>Cyber Range
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#0d69da] transition-colors duration-300 ease-linear flex items-center"
              >
                <FaAngleRight/>Departmental Tabletop Excercises
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#0d69da] transition-colors duration-300 ease-linear flex items-center"
              >
                <FaAngleRight/>Vulnerability Assessment and Penetration Testing
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:text-[#0d69da] transition-colors duration-300 ease-linear flex items-center"
              >
                <FaAngleRight/>SOC as a Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center w-full text-white text-[17px] border-t-1 border-[#bababa80] p-5 mt-6">
      <p>
        © 2024 <a className="hover:text-[#0d69da] transition-colors duration-300 ease-linear font-[600]"
          href="https://spsnet.com/" target="_blank">
          Software Productivity Strategists, Inc.</a>
        All Rights Reserved.
      </p>
    </div>
    </footer>
  );
}
