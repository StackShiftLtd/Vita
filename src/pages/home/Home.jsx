import Hero from "./Hero";
import Marquee from "./Marquee";
import MainContent from "./MainContent";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
  document.title = "Home - Vita";
}, []);

  return (
    <>
      <Hero />
      <Marquee />
      <MainContent />
    </>
  );
}
