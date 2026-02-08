import PricingCard from "../../components/PricingCard";
export default function Hero() {
  return (
    <header id="header" className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-[55%_45%] items-center">
        {/* left div */}
        <div className="ml-6">
          <h1 className="text-[26px] mt-20 font-bold mb-5">
            Virtual Information Security Officer (vISO) Services for VITA
            Security Compliance
          </h1>
          <p className="mr-5">
            Our vISOs provide expert, hands-on cybersecurity leadership to help
            your organization achieve and maintain compliance with VITA, COV,
            and other regulatory standards. Acting as an integrated member of
            your team, our vISOs guide staff, manage security documentation,
            lead risk assessments, and support day-to-day security
            operations—ensuring your systems are protected, your controls are
            audit-ready, and your security program is both effective and
            sustainable.
          </p>
          <div className="my-5 w-50">
            <a
              href=""
              className="inline-block px-6 py-2 text-white font-semibold rounded shadow-md bg-[linear-gradient(to_right,_#02218f,_#0e72e3,_#02218f,_#0e72e3)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500 ease-in-out"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* right div  */}
        <div className="text-black text-center mt-30 mr-5">
          <div className="bg-gray-800 rounded-2xl w-60 py-2 px-5 ms-50">
            <h2 className="text-2xl text-white font-bold">Choose a Plan</h2>
            <div class="h-0.5 bg-blue-500 w-3/4 mx-auto my-2"></div>
          </div>

          <div className="grid grid-cols-3 mt-10 gap-2">
            <PricingCard name="Basic" price="$1k" />
            <PricingCard name="Standard" price="$3k" />
            <PricingCard name="Premium" price="Custom" />
          </div>
        </div>
      </div>
    </header>
  );
}
