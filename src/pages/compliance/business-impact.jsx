import Hero from "./Hero";
import { useEffect } from "react";

export default function Business_impact() {
  useEffect(() => {
    document.title = "Vita Compliance";
  }, []);
  return (
    <>
      <Hero
        heading="Business Impact Analysis (BIA)"
        para="In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:"
      />
      <section>
      
      <div className="mt-10 mx-3 border-1 border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
         
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              Business Impact Analysis (BIA)
            </h3>
            <p className="mt-1">
              A Business Impact Analysis (BIA) identifies essential business
              functions and the systems and data that support them. It helps
              agencies understand how the loss or disruption of services impacts
              confidentiality, integrity, and availability. The results guide
              risk management, contingency planning, and system classification
              efforts.
            </p>
            <p className="mt-3">
              "Agencies are required to complete and document BIAs for all
              information systems and business processes, ensuring they are
              reviewed annually and fully updated every three years.”
            </p>
            <p><strong>— SEC 530 Standard</strong></p>
          </div>
          
          <div className="p-5">
            <img
              src="../../src/assets/compliance/business-impact.webp"
              alt="security picture"
              className="w-[290px] h-[203px]"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6">
          <h3 className="text-[20px] font-bold">Core Objectives of a BIA</h3>
          <p className="mt-2">
            The BIA ensures that each agency can define and prioritize essential
            functions, assess dependencies, and prepare recovery strategies.
            Outcomes of a BIA feed directly into risk assessments and
            contingency planning activities.
          </p>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              Identify essential business functions and supporting IT
              systems/data
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              Assess impacts on confidentiality, integrity, and availability
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              Define Recovery Time Objectives (RTO) and Recovery Point
              Objectives (RPO)
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              Document interdependencies between systems and processes
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              Align results with risk management and contingency planning
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6 mb-2">
          <h3 className="text-[20px] font-bold">BIA Review Cycle</h3>
          <p className="mt-1">
            Each agency must review its BIA annually and fully update it every three years. This ensures business functions and supporting systems remain accurately assessed, even as technology and operations evolve. Updated BIAs must be integrated into the Commonwealth’s risk management process.
          </p>
        </div>
      </div>

      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6">
          <h3 className="text-[20px] font-bold">Why Business Impact Analysis Matters</h3>
          <p className="mt-2">
           A well-executed BIA helps agencies prioritize resources, strengthen resilience, and ensure that critical services remain available during and after disruptions. By identifying vulnerabilities and recovery needs, agencies can plan effectively to protect citizens, data, and mission-essential operations.
          </p>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                <strong>Identify Critical Functions: </strong>Determine which agency functions are essential for mission continuity.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                <strong>Assess Impact: </strong>Evaluate the effects of downtime, data loss, or compromised availability.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                <strong>Set Recovery Objectives: </strong>Establish RTO and RPO targets for essential systems and processes.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                <strong>Support Risk Management: </strong>Integrate BIA results into overall risk assessments and contingency plans.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
