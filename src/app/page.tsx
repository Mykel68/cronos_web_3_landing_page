import About from "@/components/About";
import CommunityService from "@/components/CommunitySection";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Network from "@/components/Network";
import Service from "@/components/Service";
import Stacking from "@/components/Stacking";
import TheHeart from "@/components/TheHeart";
import TrustedValue from "@/components/TrustedValue";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full ">
      <Navbar />
      <Hero />
      <Service />
      <TheHeart />
      <About />
      <Stacking />
      <Feature />
      <TrustedValue />
      <Network />
      <CommunityService />
      <Footer />
    </div>
  );
}
