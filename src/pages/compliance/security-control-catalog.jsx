import Hero from "./Hero";
import { useEffect } from "react";

export default function Security_control_catalog() {
  useEffect(() => {
    document.title = "Vita Compliance";
  }, []);
  return (
    <>
      <Hero
        heading="Security Controls Catalog"
        para="In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:"
      />
      <section>
        <div className="mt-10 mx-3 border-1 border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
            <div className="py-5 px-6">
              <h3 className="text-[20px] font-bold">Security Controls Catalog</h3>
              <p className="mt-1">
                The Commonwealth’s Information Security Standard (SEC-530)
                defines a catalog of security controls organized into families.
                Each control contains a statement, a discussion to explain
                intent, and possible enhancements for higher-risk or sensitive
                systems.
              </p>
              <p className="mt-3">
                “Security controls described in this standard are organized into
                families. Each family contains controls related to the same
                security functionality.”
              </p>
              <p>
                <strong>— SEC 530 Standard</strong>
              </p>
            </div>

            <div className="p-5 mt-3">
              <img
                src="../../src/assets/compliance/security-control-catalog.webp"
                alt="security picture"
                className="w-[290px] h-[181px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100 grid grid-cols-1 sm:grid-cols-3">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">Access Control (AC)</h3>
            <p className="mt-2 text-[15px]">
              Controls that limit access to systems, applications, and data to
              authorized users and processes, including account management,
              least privilege, and session controls.
            </p>
            <h3 className="text-[20px] font-bold mt-7">
              Assessment, Authorization, and Monitoring (CA)
            </h3>
            <p className="mt-2 text-[15px]">
              Controls for security assessments, system authorizations,
              continuous monitoring, and vulnerability management.
            </p>
            <h3 className="text-[20px] font-bold mt-7">
              Identification and Authentication (IA)
            </h3>
            <p className="mt-2 text-[15px]">
              Controls requiring unique identification and robust authentication
              methods for users, devices, and processes before granting system
              access.
            </p>
          </div>

          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">Awareness and Training (AT)</h3>
            <p className="mt-2 text-[15px]">
              Controls to ensure all personnel receive appropriate security and
              privacy training, promoting awareness of risks and
              responsibilities.
            </p>
            <h3 className="text-[20px] font-bold mt-7">
              Configuration Management (CM)
            </h3>
            <p className="mt-2 text-[15px]">
              Controls for establishing baselines, monitoring configuration
              changes, and enforcing secure settings to prevent unauthorized
              changes.
            </p>
            <h3 className="text-[20px] font-bold mt-7">Incident Response (IR)</h3>
            <p className="mt-2 text-[15px]">
              Controls for establishing, training, and testing an incident
              response capability to detect, report, and recover from incidents.
            </p>
          </div>

          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">Audit and Accountability (AU)</h3>
            <p className="mt-2 text-[15px]">
              Controls for creating, protecting, reviewing, and analyzing audit
              logs to ensure accountability for user and system activities.
            </p>
            <h3 className="text-[20px] font-bold mt-7">
              Contingency Planning (CP)
            </h3>
            <p className="mt-2 text-[15px]">
              Controls to ensure agencies can respond to and recover from
              disruptions, including disaster recovery and business continuity
              planning.
            </p>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              Sample Control: Access Control (AC-2)
            </h3>
            <p className="mt-2">
              Example: <strong> Account Management (AC-2)</strong>
            </p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>Define allowed account types and assign account managers.</p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Require approval for creating accounts and promptly disable
                  accounts when users leave.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>Review all accounts at least annually.</p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Implement enhancements such as automated account management
                  and disabling inactive accounts.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">Structure of Controls</h3>
            <p className="mt-2">Each control in SEC-530 includes:</p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Control: </strong>The requirement statement.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Discussion: </strong>Explanation and intent of the
                  control.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Control Enhancements: </strong>Additional or stronger
                  requirements for sensitive systems.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
