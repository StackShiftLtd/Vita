import Hero from "./Hero";
import { useEffect } from "react";

export default function Information_security_policy() {
  useEffect(() => {
    document.title = "Vita Compliance";
  }, []);
  return (
    <>
      <Hero
        heading="Information Security Policy"
        para="In alignment with the Commonwealth of Virginia’s Information
            Security Standard SEC-530-01.2, our Security Policy Management as a
            Service clearly defines the essential governance roles and
            accountabilities that support a robust security posture:"
      />
      <section>
        <div className="mt-10 mx-3 border-1 border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
            {/* left div */}
            <div className="py-5 px-6">
              <h3 className="text-[20px] font-bold">
                Information Security Policy
              </h3>
              <p className="mt-1">
                This section establishes a base standard for information
                security and risk management across the agency. Drawing from
                NIST SP 800-53 Rev. 5, it defines baseline expectations for
                protecting confidentiality, integrity, and availability.
                Agencies must meet or exceed these baselines and may then tailor
                and document controls to suit their environment and sensitivity
                of their systems and data.
              </p>
              <p className="mt-3">
                “Agencies are required to develop, document, and enforce an
                information security program that aligns with SEC530 Information
                Security Standard. Exceptions may only be granted with proper
                justification, mitigation, and approval.”
              </p>
            </div>
              {/* /* right div  */}
            <div className="p-5">
              <img
                src="../../src/assets/compliance/information-security-policy.webp"
                alt="security picture"
                className="w-[290px] h-[193px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              Information Security Program Objectives
            </h3>
            <p className="mt-2">
              Key objectives include defining clear roles and responsibilities,
              establishing and maintaining the security program, managing
              exceptions appropriately, and identifying exemptions where
              applicable.
            </p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                Define Roles & Responsibilities
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                Establish and Enforce the Security Program
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                Manage Exceptions and Document Mitigations
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6 mb-2">
            <h3 className="text-[20px] font-bold">Access Control Policy</h3>
            <p className="mt-1">
              Agencies must document and implement access control procedures.
              This includes account management, timely disabling of unused
              accounts, audits, and monitoring. Shared accounts are prohibited,
              and privileged access must be restricted and documented.
            </p>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              Security Control Framework
            </h3>
            <p className="mt-2">
              The Information Security Standard is based on 17 control families,
              such as Access Control, Incident Response, Awareness and Training,
              and Supply Chain Risk Management. Each control includes baseline
              requirements and optional enhancements to strengthen security as
              needed.
            </p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6 mt-1"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Risk & Classification: </strong>
                  Agencies must conduct Business Impact Analyses (BIAs),
                  classify systems and data, and document results in the eGRC
                  system. Sensitive systems require additional oversight.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6 mt-1"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Assessment & Audits: </strong>
                  Risk assessments must be conducted every three years, with
                  annual self-assessments, and sensitive systems audited
                  independently according to SEC502 requirements.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6 mt-1"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Roles & Governance: </strong>
                  Agency Heads, CIOs, CISOs, and ISOs each have specific duties
                  in overseeing security, enforcing compliance, and maintaining
                  accountability.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6 mt-1"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Program Enforcement: </strong>
                  Documented programs, exception processes, and control
                  tailoring ensure agencies meet statewide requirements while
                  managing operational risk effectively.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
