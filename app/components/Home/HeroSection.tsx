import { ChevronDown } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-gradient-to-br opacity-20"
          style={{
            backgroundImage: `url('/images/damavand.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
          style={{ color: "#2a4a62" }}
        >
چکاد          <span className="block" style={{ color: "#7ab0c8" }}></span>
        </h1>
        <p className="text-xl md:text-2xl mb-8" style={{ color: "#446b84" }}>
          اطللاعات قله‌ها، مسیرها و اطلاعات فنی کوه‌های ایران در یک‌جا{" "}
        </p>
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundColor: "#7ab0c8",
              color: "white",
              boxShadow: "0 6px 20px rgba(122, 176, 200, 0.4)",
            }}
          >
            سفر خود را آغاز کنید
          </button>
          <button
            className="px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300"
            style={{
              borderColor: "#7ab0c8",
              color: "#7ab0c8",
              backgroundColor: "transparent",
            }}
          >
            تماشای ویدئو
          </button>
        </div> */}

        <div className="relative w-full max-w-md mx-auto mt-4">
          <input
            type="text"
            placeholder="قله یا سایت سنگنوردی را جستجو کنید..."
            className="w-full px-6 py-4 pr-12 text-right text-lg border border-gray-300 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7ab0c8] focus:border-[#7ab0c8] placeholder-gray-400 placeholder-opacity-70"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" style={{ color: "#7ab0c8" }} />
      </div>
    </section>
  );
}

export default HeroSection;
