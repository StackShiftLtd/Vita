import { FaLock, FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function MainContent() {
  return (
    <>
      <div className="flex gap-6 p-6">
        <div className="flex flex-col w-1/3 gap-6">
          <div className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaLock />
              </div>
              <h3 className="text-lg font-semibold">
                Information Security Policy
              </h3>
            </div>

            <p className="text-gray-600 mt-3 text-sm">
              Our Information Security Policy establishes a comprehensive
              framework for protecting the confidentiality, integrity, and
              availability of data, systems, and networks across the
              organization.
              <span className="block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {" "}
                It sets clear security objectives, compliance requirements, and
                operational practices designed to safeguard organizational
                information from internal and external threats, while ensuring
                regulatory and contractual obligations are met. The policy
                emphasizes the protection of sensitive information, including
                personally identifiable information (PII), financial records,
                intellectual property, and other critical business data, against
                unauthorized access, disclosure, modification, or destruction.
                <span>
                  <a
                    href=""
                    className="inline-flex items-center  text-[#0d69da] hover:text-[#032b9a] transition-colors duration-300 ease-linear"
                  >
                    Learn More{" "}
                    <span className="text-sm">
                      <FaAngleRight />
                    </span>
                  </a>
                </span>
              </span>
            </p>
          </div>

         <div className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-green-300 p-3 rounded-full">
                <FaUsers />
              </div>
              <h3 className="text-lg font-semibold">
                Roles and Responsibilities
              </h3>
            </div>

            <p className="text-gray-600 mt-3 text-sm">
              Clear roles and responsibilities are fundamental to maintaining an effective and accountable information security program.
              <span className="block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {" "}
                Every member of the organization, from executive leadership to operational staff, has a distinct responsibility in protecting information assets, ensuring compliance, and mitigating risks. Employees are expected to follow established security policies, participate in mandatory training programs, report any suspicious activities, and protect sensitive data in all daily operations. Managers and supervisors are responsible for enforcing security procedures within their teams, monitoring adherence to policies, and escalating issues to higher management or the Information Security Officer (ISO) as necessary.
                <span>
                  <a
                    href=""
                    className="inline-flex items-center  text-[#0d69da] hover:text-[#032b9a] transition-colors duration-300 ease-linear"
                  >
                    Learn More{" "}
                    <span className="text-sm">
                      <FaAngleRight />
                    </span>
                  </a>
                </span>
              </span>
            </p>
          </div>

          <div className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <FaBriefcase />
              </div>
              <h3 className="text-lg font-semibold">
                Business Impact Analysis
              </h3>
            </div>

            <p className="text-gray-600 mt-3 text-sm">
             The Business Impact Analysis (BIA) is a critical component of our organization's information security and continuity planning efforts.
              <span className="block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {" "}
               It systematically identifies and evaluates essential business functions, determining the potential impact of disruptions on these operations. By assessing the financial, operational, and reputational consequences of various threats—such as cyberattacks, natural disasters, or system failures—the BIA enables us to prioritize recovery strategies effectively.
                <span>
                  <a
                    href=""
                    className="inline-flex items-center  text-[#0d69da] hover:text-[#032b9a] transition-colors duration-300 ease-linear"
                  >
                    Learn More{" "}
                    <span className="text-sm">
                      <FaAngleRight />
                    </span>
                  </a>
                </span>
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 gap-6">
          <div className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaLaptopCode />
              </div>
              <h3 className="text-lg font-semibold">
                IT System and Data Sensitivity Classification
              </h3>
            </div>

            <p className="text-gray-600 mt-3 text-sm">
             We classify IT systems and data based on their sensitivity to ensure the right level of protection. Classification categories typically include:
              <span className="block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {" "}
              <ul className="list-disc list-outside pl-5 my-3 space-y-2">
                <li><strong>Public: </strong>Information intended for general access without restrictions.</li>
                <li><strong>Internal: </strong>Business-use information not for public disclosure.</li>
                <li><strong>Confidential: </strong>Sensitive data requiring controlled access.</li>
                <li><strong>Restricted: </strong>Highly sensitive systems/data with strict protection measures.</li>
              </ul>
                <span>
                  <a
                    href=""
                    className="inline-flex items-center  text-[#0d69da] hover:text-[#032b9a] transition-colors duration-300 ease-linear"
                  >
                    Learn More{" "}
                    <span className="text-sm">
                      <FaAngleRight />
                    </span>
                  </a>
                </span>
              </span>
            </p>
          </div>

          <div className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <FaServer />
              </div>
              <h3 className="text-lg font-semibold">
                Sensitive IT System Inventory and Definition
              </h3>
            </div>

            <p className="text-gray-600 mt-3 text-sm">
            An inventory of sensitive IT systems helps maintain visibility and proper protection. Each system is defined by:
              <span className="block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {" "}
              <ul className="list-disc list-outside pl-5 my-3 space-y-2">
                <li><strong>System Name & Owner: </strong>Identification and accountability.</li>
                <li><strong>Data Handled: </strong>Type of sensitive or regulated information processed.</li>
                <li><strong>Criticality: </strong>Impact of downtime or data loss on business operations.</li>
                <li><strong>Controls Applied: </strong>Security measures in place for protection.</li>
              </ul>
                <span>
                  <a
                    href=""
                    className="inline-flex items-center  text-[#0d69da] hover:text-[#032b9a] transition-colors duration-300 ease-linear"
                  >
                    Learn More{" "}
                    <span className="text-sm">
                      <FaAngleRight />
                    </span>
                  </a>
                </span>
              </span>
            </p>
          </div>

           <div className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 p-3 rounded-full">
                <FaExclamationTriangle />
              </div>
              <h3 className="text-lg font-semibold">
               Risk Assessment
              </h3>
            </div>

            <p className="text-gray-600 mt-3 text-sm">
            Risk assessments evaluate potential threats and vulnerabilities to IT systems and data. The process typically includes:
              <span className="block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {" "}
              <ul className="list-disc list-outside pl-5 my-3 space-y-2">
                <li><strong>Identify Assets: </strong> Catalog critical systems, data, and processes.</li>
                <li><strong>Analyze Threats & Vulnerabilities: </strong>Assess possible risks and weaknesses.</li>
                <li><strong>Evaluate Impact & Likelihood: </strong>Measure business impact if risks materialize.</li>
                <li><strong>Mitigation Plans: </strong>Recommend controls and prioritize risk treatments.</li>
              </ul>
                <span>
                  <a
                    href=""
                    className="inline-flex items-center  text-[#0d69da] hover:text-[#032b9a] transition-colors duration-300 ease-linear"
                  >
                    Learn More{" "}
                    <span className="text-sm">
                      <FaAngleRight />
                    </span>
                  </a>
                </span>
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col w-1/3 gap-6">
          <div className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full text-white">
                <FaChartLine />
              </div>
              <h3 className="text-lg font-semibold">
               IT Security Audits
              </h3>
            </div>

            <p className="text-gray-600 mt-3 text-sm">
           IT security audits are conducted to evaluate the effectiveness of security measures, compliance with policies, and adherence to regulatory standards. 
              <span className="block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {" "}
                These audits help identify gaps and strengthen the overall security posture.
              <ul className="list-disc list-outside pl-5 my-3 space-y-2">
                <li><strong>Compliance Review: </strong> Ensures alignment with industry standards (e.g., ISO, NIST, GDPR).</li>
                <li><strong>Vulnerability Assessment: </strong>Identifies weaknesses in systems, networks, and processes.</li>
                <li><strong>Control Effectiveness: </strong>Tests whether implemented safeguards are working as intended.</li>
                <li><strong>Continuous Improvement: </strong>Provides recommendations to reduce risks and enhance resilience.</li>
              </ul>
                <span>
                  <a
                    href=""
                    className="inline-flex items-center  text-[#0d69da] hover:text-[#032b9a] transition-colors duration-300 ease-linear"
                  >
                    Learn More{" "}
                    <span className="text-sm">
                      <FaAngleRight />
                    </span>
                  </a>
                </span>
              </span>
            </p>
          </div>

          <div className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 p-3 rounded-full text-white">
                <FaListUl />
              </div>
              <h3 className="text-lg font-semibold">
              Security Controls Catalog
              </h3>
            </div>

            <p className="text-gray-600 mt-3 text-sm">
           The Security Controls Catalog provides a comprehensive list of technical and organizational measures used to safeguard systems and data.
              <span className="block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {" "}
                These controls are aligned with best practices and regulatory requirements.
              <ul className="list-disc list-outside pl-5 my-3 space-y-2">
                <li><strong>Access Controls: </strong>Role-based access, authentication, and authorization policies.</li>
                <li><strong>Network Security: </strong>Firewalls, intrusion detection/prevention, and segmentation.</li>
                <li><strong>Data Protection: </strong> Continuous monitoring of systems for anomalies and threats.</li>
                <li><strong>Monitoring & Logging: </strong>Provides recommendations to reduce risks and enhance resilience.</li>
                <li><strong>Incident Response: </strong>Defined processes to detect, respond, and recover from security incidents.</li>
              </ul>
                <span>
                  <a
                    href=""
                    className="inline-flex items-center  text-[#0d69da] hover:text-[#032b9a] transition-colors duration-300 ease-linear"
                  >
                    Learn More{" "}
                    <span className="text-sm">
                      <FaAngleRight />
                    </span>
                  </a>
                </span>
              </span>
            </p>
          </div>

         <div className="group bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:-translate-y-2 hover:scale-105 duration-300 transition-all">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-500 p-3 rounded-full">
                <FaDatabase />
              </div>
              <h3 className="text-lg font-semibold">
               SEC 540 — Data Classifications
              </h3>
            </div>

            <p className="text-gray-600 mt-3 text-sm">
           The Data Classification Standard (SEC 540) establishes how agencies across the Commonwealth of Virginia (COV) classify and protect information.
              <span className="block max-h-0 opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                {" "}
                Agencies must safeguard electronic data in line with the Code of Virginia and comply with federal regulations such as HIPAA, FERPA, PCI, and others.
              <ul className="list-disc list-outside pl-5 my-3 space-y-2">
                <li><strong>Why it matters: </strong>Protects confidentiality, integrity, and availability while meeting legal and regulatory requirements.</li>
                <li><strong>Who it applies to: </strong>All employees, contractors, and partners handling organizational data in any format.</li>
                <li><strong>How data is classified: </strong>Based on confidentiality, regulatory needs, business impact, and access requirements.</li>
                <li><strong>Classification labels: </strong>Define usage, compliance, and sensitivity or handling requirements.</li>
              </ul>
                <span>
                  <a
                    href=""
                    className="inline-flex items-center  text-[#0d69da] hover:text-[#032b9a] transition-colors duration-300 ease-linear"
                  >
                    Learn More{" "}
                    <span className="text-sm">
                      <FaAngleRight />
                    </span>
                  </a>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
