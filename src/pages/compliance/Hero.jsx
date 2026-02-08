export default function Hero(promps) {
  return (
    <header id="header" className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-[65%_35%] items-center">
        <div className="ml-6 mb-15">
          <h1 className="text-[20px] mt-20 font-[700] mb-4">
            {promps.heading}
          </h1>
          <p className="mr-5">
            {promps.para}
          </p>
        </div>
      </div>
    </header>
  );
}
