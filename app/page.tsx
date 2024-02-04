import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Properties from "@/components/Properties";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  return (
  <div>
<Hero/>
<About/>
<Properties/>
<Contact/>
<Footer/>
  </div>
  );
}
