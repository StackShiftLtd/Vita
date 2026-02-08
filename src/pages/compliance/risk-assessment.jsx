import Hero from "./Hero";
import { useEffect } from "react";

export default function Risk_assessment() {
  useEffect(() => {
    document.title = "Vita Compliance";
  }, []);
  return (
    <>
      <Hero
        heading="Risk Assessment"
        para="In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:"
      />
      <section>
        <div className="mt-10 mx-3 border-1 border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
            <div className="py-5 px-6">
              <h3 className="text-[20px] font-bold">Risk Assessment</h3>
              <p className="mt-1">
                Risk assessment is the foundation of information security
                management. Agencies are required to identify threats,
                vulnerabilities, and potential impacts to ensure appropriate
                security controls are in place. This process aligns business
                objectives with security measures, reducing the likelihood and
                severity of incidents.
              </p>
              <p className="mt-3">
                “Agencies must conduct regular risk assessments to identify,
                evaluate, and prioritize risks to IT systems and data, ensuring
                decisions are based on business impact and security
                requirements.”
              </p>
              <p>
                <strong>— SEC 530 Standard</strong>
              </p>
            </div>

            <div className="p-5 mt-3">
              <img
                src="../../src/assets/compliance/risk-assesment.webp"
                alt="security picture"
                className="w-[290px] h-[165px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              Key Components of Risk Assessment
            </h3>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Asset Identification: </strong>Recognize critical
                  systems, applications, and data.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Threat Identification: </strong>Determine potential
                  sources of harm (internal or external).
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Vulnerability Analysis: </strong>Identify weaknesses
                  that could be exploited.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Impact Assessment: </strong>Evaluate the potential
                  business, legal, and operational impact.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>Risk Determination: </strong>Measure likelihood and
                  severity to assign a risk level.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">Risk Assessment Process</h3>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>01. Preparation: </strong>Define scope, stakeholders,
                  and methodology for assessment.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>02. Data Collection: </strong>Gather information about
                  assets, threats, and vulnerabilities.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>03. Analysis: </strong>Evaluate risk likelihood and
                  impact using qualitative or quantitative methods.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>04. Mitigation Planning: </strong>Develop risk
                  treatment strategies: avoid, transfer, mitigate, or accept
                  risk.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>05. Documentation & Review: </strong>Record results
                  and ensure assessments are reviewed periodically.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6 mb-2">
            <h3 className="text-[20px] font-bold">
              Why Risk Assessment Matters
            </h3>
            <p className="mt-1">
              By systematically identifying and analyzing risks, agencies can
              focus resources on the most critical threats, reduce exposure to
              cyberattacks, and ensure compliance with legal and regulatory
              obligations. Risk assessments also strengthen incident response
              planning and improve overall resilience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
