import Hero from "./Hero";
import { useEffect } from "react";

export default function Sensitive_it_inventory() {
  useEffect(() => {
    document.title = "Vita Compliance";
  }, []);
  return (
    <>
      <Hero
        heading="Sensitive IT System Inventory"
        para="In alignment with the Commonwealth of Virginia’s Information Security Standard SEC-530-01.2, our Security Policy Management as a Service clearly defines the essential governance roles and accountabilities that support a robust security posture:"
      />
      <section>
        <div className="mt-10 mx-3 border-1 border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-[75%_25%]">
            <div className="py-5 px-6">
              <h3 className="text-[20px] font-bold">
                Sensitive IT System Inventory
              </h3>
              <p className="mt-1">
                Sensitive IT systems are those that process, store, or transmit
                information essential to an agency’s mission, public safety, or
                regulatory compliance. Maintaining an accurate inventory of
                these systems ensures that appropriate security controls are
                applied and continuously monitored.
              </p>
              <p className="mt-3">
                “Agencies are required to identify, define, and maintain an
                inventory of sensitive IT systems to ensure security measures
                align with business, legal, and operational requirements.”
              </p>
              <p>
                <strong>— SEC 530 Standard</strong>
              </p>
            </div>

            <div className="p-5 mt-3">
              <img
                src="../../src/assets/compliance/sensitive-it-inventory.webp"
                alt="security picture"
                className="w-[290px] h-[162px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              Overview of Sensitive IT Systems
            </h3>
            <p className="mt-2">
              A system is considered <strong>sensitive</strong> if unauthorized
              access, disclosure, modification, or loss of availability would
              cause significant adverse impact to the agency, its stakeholders,
              or the public.
            </p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                Processes mission-critical or confidential information
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                Supports essential business or government operations
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                Handles data regulated by law or compliance requirements
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                Has high potential impact if compromised or unavailable
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6">
            <h3 className="text-[20px] font-bold">
              Maintaining a Sensitive System Inventory
            </h3>
            <p className="mt-2">
              Agencies must document and regularly update an inventory of all
              sensitive IT systems. This inventory serves as the foundation for
              risk assessments, security planning, and compliance reporting.
            </p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>01. System Identification: </strong>List all IT
                  systems that process or store sensitive data.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>02. Classification: </strong>Define sensitivity level
                  (Low, Moderate, High) based on business impact.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>03. Ownership: </strong>Assign business and technical
                  owners accountable for security.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>04. Documentation: </strong>Record system details
                  including data types, dependencies, and compliance
                  obligations.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  <strong>05. Review & Update: </strong>Regularly validate and
                  update inventory to reflect system changes.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 mx-3 border-1 border-gray-100">
          <div className="py-5 px-6 mb-2">
            <h3 className="text-[20px] font-bold">Why Inventory Matters</h3>
            <p className="mt-1">
              An accurate and up-to-date sensitive IT system inventory enables
              agencies to focus security resources on the most critical assets,
              comply with state and federal regulations, and minimize risks to
              operations, reputation, and public trust.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
