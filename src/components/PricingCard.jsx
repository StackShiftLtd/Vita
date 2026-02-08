export default function PricingCard(def) {
  return (
<div className="flex justify-center items-center text-white">

  <div className="rounded-3xl py-5 bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md border border-gray-700 shadow-xl max-w-sm w-full hover:bg-gray-700 hover:-translate-y-2 hover:scale-105 duration-300">
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-2 text-white">{def.name}</h2>
      <div className="h-0.5 bg-blue-500 w-1/4 mx-auto my-4"></div>
      <p className="text-2xl font-bold text-white mt-4">{def.price}
        {def.name !== "Premium" && <span className="text-xl text-gray-500">/mo</span>}</p>
    </div>

    <div className="mt-5"> 
      <button className="inline-block px-5 py-1 text-white font-semibold rounded shadow-md bg-[linear-gradient(to_right,_#02218f,_#0e72e3,_#02218f,_#0e72e3)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500 ease-in-out">
        Get Started
      </button>
    </div>
  </div>
</div>
  );
}
