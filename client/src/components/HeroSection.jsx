"use client"; 
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section 
      className="w-full max-w-[96%] mx-auto bg-blue-600 rounded-md py-16 px-6 md:py-24 md:px-12 my-10"
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          id="hero-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Lorem Ipsum
        </h1>
        
        <p 
          id="hero-description"
          className="text-base md:text-lg text-blue-50 mb-8 leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="w-full sm:w-auto bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
            aria-label="Get started with our service"
          >
            Get Started
          </button>
          
          <button 
            className="w-full sm:w-auto bg-transparent text-white font-semibold px-8 py-3 rounded-md border-2 border-white hover:bg-white hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            aria-label="Learn more about our features"
            onClick={() => router.push('/the-idea-board')}
          >
            Idea Board
          </button>
        </div>
      </div>
    </section>
  );
}
