import Hero from "./Hero";
import { useEffect } from "react";

export default function It_system_data() {
  useEffect(() => {
    document.title = "Vita Compliance";
  }, []);
  return (
    <>
      <Hero
        heading="IT System and Data Sensitivity Classification"
        para="In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:"
      />
      <section>
      
      <div className="mt-10 mx-3 border-1 border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
          
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              IT System and Data Sensitivity Classification
            </h3>
            <p className="mt-1">
              System and data sensitivity classification is the process of assigning a sensitivity level to information systems and the data they store, process, or transmit. This ensures that agencies apply appropriate safeguards to protect confidentiality, integrity, and availability in line with business and regulatory requirements.
            </p>
            <p className="mt-3">
              “Agencies must classify their IT systems and data based on sensitivity to ensure appropriate security controls are implemented and maintained.”
            </p>
            <p><strong>— SEC 530 Standard</strong></p>
          </div>
         
          <div className="p-5">
            <img
              src="../../src/assets/compliance/it-system-data.webp"
              alt="security picture"
              className="w-[290px] h-[179px]"
            />
          </div>
        </div>
      </div>
     
      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6">
          <h3 className="text-[20px] font-bold">Core Objectives of Sensitivity Classification</h3>
          <p className="mt-2">
            Classification establishes the foundation for system security planning and determines the level of controls necessary to protect agency operations and citizen data. This process also supports risk assessments and compliance efforts.
          </p>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
             Identify and categorize IT systems and associated data
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              Assess the impact of loss of confidentiality, integrity, or availability
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              Assign appropriate sensitivity levels (e.g., Low, Moderate, High)
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              Ensure alignment with business needs and compliance standards
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              Integrate results into risk management and security controls
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6">
          <h3 className="text-[20px] font-bold">Sensitivity Classification Levels</h3>
          <p className="mt-2">
           The classification framework typically includes the following levels, each guiding the selection of security measures:
          </p>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                <strong>Low Sensitivity: </strong>Loss has limited adverse impact; minimal disruption to operations.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                <strong>Moderate Sensitivity: </strong>Loss could cause significant disruption or damage to agency functions.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                <strong>High Sensitivity: </strong>Loss would result in severe or catastrophic effects on operations, finances, public trust, or safety.
              </p>
            </li>
          </ul>
        </div>
      </div>
       
      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6 mb-2">
          <h3 className="text-[20px] font-bold">Why Sensitivity Classification Matters</h3>
          <p className="mt-1">
            Accurate classification ensures that resources are prioritized for the most critical systems and data. It provides a structured approach to safeguarding sensitive information, maintaining compliance, and reducing risks to mission-essential services.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
