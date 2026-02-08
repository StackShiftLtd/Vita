import Hero from "./Hero";
import { useEffect } from "react";

export default function It_security_audits() {
  useEffect(() => {
    document.title = "Vita Compliance";
  }, []);
  return (
    <>
      <Hero
        heading="IT Security Audits"
        para="In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:"
      />
      <section>
      
      <div className="mt-10 mx-3 border-1 border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
         
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">IT Security Audits</h3>
            <p className="mt-1">
             IT Security Audits are independent reviews required by the Commonwealth to evaluate how well agencies protect sensitive systems. They measure compliance with SEC 530 and SEC 502 standards, ensuring security policies, procedures, and technical safeguards are being followed.
            </p>
            <p className="mt-3">
              “Each agency shall ensure that an IT security audit of all sensitive systems is conducted every three years in accordance with the Commonwealth’s security audit standard (SEC 502). All findings must be documented and corrective actions tracked until resolution.”
            </p>
            <p><strong>— SEC 530 Standard</strong></p>
          </div>
          
          <div className="p-5 mt-3">
            <img
              src="../../src/assets/compliance/it-security-audits.webp"
              alt="security picture"
              className="w-[290px] h-[152px]"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6">
          <h3 className="text-[20px] font-bold">
           Objectives of IT Security Audits
          </h3>
          <p className="mt-2">
            The primary objectives of IT security audits are:
          </p>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>Verify compliance with Commonwealth security policies, standards, and laws.</p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>Identify risks, vulnerabilities, or non-compliance within sensitive systems.</p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>Evaluate the effectiveness of technical, operational, and management controls.</p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>Confirm corrective actions from previous audits are fully implemented.</p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>Provide assurance to agency leadership and the CISO that systems are safeguarded.</p>
            </li> 
          </ul>
        </div>
      </div>
      
      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6">
          <h3 className="text-[20px] font-bold">
            Agency Responsibilities
          </h3>
          <p className="mt-2">
            Agencies are accountable for supporting IT security audits by:
          </p>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Ensuring sensitive systems are audited at least once every three years.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Maintaining updated Risk Assessments, BIAs, and Contingency Plans for review.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Developing and implementing corrective action plans for all audit findings.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Reporting audit results and progress on corrective actions to the Commonwealth’s CISO.
              </p>
            </li>
         
          </ul>
        </div>
      </div>
      
      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6 mb-2">
          <h3 className="text-[20px] font-bold">Corrective Action & Compliance Tracking</h3>
          <p className="mt-1">
            Following an IT security audit, agencies must track, document, and report corrective actions until all findings are resolved. Progress must be regularly communicated to the CISO to ensure compliance and continuous improvement of the Commonwealth’s security posture.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
