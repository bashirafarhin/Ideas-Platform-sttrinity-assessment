import HeroSection from "../components/HeroSection";
import Faq from "../components/faq/Faq";
import { faq } from "@/data/faq";
import Marquee from "@/components/Marquee";
import { Rocket, Lightbulb, Zap, Globe } from "lucide-react";
import Features from "@/components/features/Features";

export default function Home() {
  return (
    <div>
      <HeroSection />
     
           <Marquee
        items={[
          <div key="startup" className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-blue-500" />
            <span className="text-gray-400">Startup</span>
          </div>,
          <div key="innovation" className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <span className="text-gray-400">Innovation</span>
          </div>,
          <div key="speed" className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-orange-500" />
            <span className="text-gray-400">Speed</span>
          </div>,
          <div key="global" className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-green-500" />
            <span className="text-gray-400">Global Reach</span>
          </div>,
        ]}
        itemClassName="mx-8 text-lg font-bold text-white"
      />
      <Features />
      <Faq faq={faq}/>
    </div>
  );
}
