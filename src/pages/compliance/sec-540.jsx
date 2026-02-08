import Hero from "./Hero";
import { useEffect } from "react";

export default function Sec_540() {
  useEffect(() => {
    document.title = "Vita Compliance";
  }, []);
  return (
    <>
      <Hero
        heading="SEC 540 — Data Classifications"
        para="The Data Classification Standard (SEC 540) sets the baseline for how agencies across the Commonwealth of Virginia (COV) classify and protect information. Each Agency Head is responsible for safeguarding electronic data in line with the Code of Virginia (§2.2-603.F and §2.2-2009). Agencies must also comply with any federal regulations tied to the type of information they handle such as HIPAA, FERPA, IRS 1075, PCI, CJIS, and others."
      />
      <section>
      
      <div className="mt-10 mx-3 border-1 border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
         
          <div className="py-5 ps-6 mt-3">
            <h3 className="text-[20px] font-bold">Why it matters</h3>
            <p className="mt-2">This standard provides a framework to:</p>
            <ul className="mt-3 flex flex-col gap-5">
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>Identify the type of data an agency uses.</p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Separate data classification from sensitivity classification.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>
                  Ensure information is managed in a way that protects
                  confidentiality, integrity, and availability.
                </p>
              </li>
              <li className="flex gap-2">
                <img
                  className="w-6 h-6"
                  src="../../src/assets/icons/check.png"
                  alt="icons"
                />
                <p>Meet legal, regulatory, and business requirements.</p>
              </li>
            </ul>
          </div>
          
          <div className="p-5">
            <img
              className="ms-19 w-[405px] h-[267px]"
              src="../../src/assets/compliance/sec-540.webp"
              alt="security picture"
            />
          </div>
        </div>
      </div>

      
      <div className="mt-4 mx-3 border-1 border-gray-100">
        <div className="py-5 px-6">
          <h3 className="text-[20px] font-bold">Who it applies to</h3>
          <p className="mt-2">This standard applies to:</p>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                All employees, contractors, consultants, and third-party
                partners who create, manage, store, transmit, or access
                organizational data.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>All formats — digital, paper, or otherwise.</p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                COV agencies must also enforce compliance when data is processed
                by third-party providers.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-4 mx-3 border-1 border-gray-100 grid grid-cols-1 md:grid-cols-2">
        
        <div className="py-5 ps-6">
          <h3 className="text-[20px] font-bold">How data is classified</h3>
          <p className="mt-2">When deciding how to classify data, agencies should consider:</p>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>Confidentiality: What happens if unauthorized access occurs?</p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Regulatory needs: Is the data subject to HIPAA, PCI, or other requirements?
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Business impact: Could disclosure cause financial loss or reputational harm?
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Access needs: Who inside or outside the agency needs access?
              </p>
            </li>
          </ul>
        </div>
        
         <div className="py-5 pe-6">
          <h3 className="text-[20px] font-bold">Classification labels</h3>
          <p className="mt-2">Every dataset must carry a clear label that identifies:</p>
          <ul className="mt-3 flex flex-col gap-5">
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              How it can be used and shared.
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Whether regulatory compliance applies.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Sensitivity or special handling requirements.
              </p>
            </li>
            <li className="flex gap-2">
              <img
                className="w-6 h-6"
                src="../../src/assets/icons/check.png"
                alt="icons"
              />
              <p>
                Retention period and disposal guidelines.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
