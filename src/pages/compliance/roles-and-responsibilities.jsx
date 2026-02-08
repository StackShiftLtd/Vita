import Hero from "./Hero";
import { useEffect } from "react";

export default function Roles_and_responsibilities() {
  useEffect(() => {
    document.title = "Vita Compliance";
  }, []);
  return (
    <>
      <Hero
        heading="Roles and Responsibilities"
        para="In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:"
      />
      <section>
        <div className="mt-10 mx-3 border-1 border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
            <div className="py-5 px-6">
              <h3 className="text-[20px] font-bold">
                Information Security Policy: Roles & Responsibilities
              </h3>
              <p className="mt-1">
                This section defines the key IT security roles and
                responsibilities within the Commonwealth’s Information Security
                Program. Individuals may hold multiple roles— as long as
                separation of duties is maintained to prevent conflicts of
                interest or fraud.
              </p>
              <p className="mt-3">
                “Each agency should utilize an organization chart that depicts
                the reporting structure… and shall maintain documentation
                regarding specific roles and responsibilities relating to
                information security.”
              </p>
              <p>
                <strong>— SEC 530 Standard</strong>
              </p>
            </div>

            <div className="p-5">
              <img
                src="../../src/assets/compliance/roles-and-reponsibilities.webp"
                alt="security picture"
                className="w-[290px] h-[152px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              Chief Information Officer of the Commonwealth (CIO)
            </h3>
            <p className="mt-2">
              The CIO directs the development of policies, procedures, and
              standards for assessing security risks, determining appropriate
              measures, and performing security audits of government electronic
              information.
            </p>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6 mb-2">
            <h3 className="text-[20px] font-bold">
              Chief Information Security Officer (CISO)
            </h3>
            <p className="mt-1">
              The CISO administers the Commonwealth’s Information Security
              Program, reviews exceptions, provides guidance and expertise,
              monitors sensitive system security status, and facilitates
              implementation of security policies and education.
            </p>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">Agency Head</h3>
            <p className="mt-2">
              The Agency Head holds responsibility for the agency’s IT system
              and data security. Their duties include:
            </p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6 mt-1"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Designate an Information Security Officer (ISO) at least
                  biennially, reporting directly to the Agency Head.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Ensure the information security program is maintained and
                  communicated, and review BIAs, risk assessments, and
                  contingency plans.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Approve or reject System Security Plans for sensitive systems
                  and require corrective measures as needed.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Ensure compliance with IT security audit standards (SEC 502),
                  oversee corrective actions, and report findings to the CISO.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Establish an information security awareness and training
                  program and provide necessary resources.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Assign roles: System Owner, Data Owner, Data Custodian, and
                  System Administrator for each sensitive system.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              Information Security Officer (ISO)
            </h3>
            <p className="mt-2">The ISO’s responsibilities include:</p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6 mt-1"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Developing and managing the agency’s information security
                  program in line with Commonwealth policies.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>Classifying all agency systems and data by sensitivity.</p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Establishing and maintaining security awareness and training
                  programs for all staff and contractors.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Implementing preventive, detective, and corrective security
                  controls appropriate to system risk and criticality.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Reporting and mitigating security incidents per Virginia law
                  and VITA requirements.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Coordinating with the CISO and completing ISO certification
                  requirements annually.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              System Owner, Data Owner, System Administrator & Other Roles
            </h3>
            <p className="mt-2">Additional responsibilities include:</p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6 mt-1"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  System Owners: Ensure users complete system-specific security
                  training and manage system risk appropriately.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Users: Comply with security requirements, and report breaches
                  or suspected incidents.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
