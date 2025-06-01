"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mountain,
  MapPin,
  Star,
  Calendar,
  Users,
  ArrowRight,
  Menu,
  X,
  Camera,
  Heart,
  Share2,
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Eye,
  Droplets,
  SquaresSubtractIcon,
  Check,
} from "lucide-react";
import HeroSection from "./components/Home/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PopularPeaks from "./components/Home/PopularPeaks";
import PopularClimbingSite from "./components/Home/PopularClimbingSite";
import OneDayHiking from "./components/Home/OneDayHiking";
import Gallery from "./components/Home/Gallery";
import Introduce from "./components/Home/Introduce";
import SuggestPeak from "./components/SuggestPeak";

const MountainHomepage = () => {
  const [scrollY, setScrollY] = useState(0);

  const [weatherData, setWeatherData] = useState({});
  const [weatherLoading, setWeatherLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Popular mountain peaks for weather data
  const popularPeaks = [
    {
      name: "اورست",
      nameEn: "Mount Everest",
      lat: 27.9881,
      lon: 86.925,
      country: "نپال/تبت",
    },
    {
      name: "کی۲",
      nameEn: "K2",
      lat: 35.8808,
      lon: 76.5155,
      country: "پاکستان/چین",
    },
    {
      name: "مون بلان",
      nameEn: "Mont Blanc",
      lat: 45.8326,
      lon: 6.8652,
      country: "فرانسه/ایتالیا",
    },
    {
      name: "ماترهورن",
      nameEn: "Matterhorn",
      lat: 45.9763,
      lon: 7.6586,
      country: "سوئیس/ایتالیا",
    },
    {
      name: "دنالی",
      nameEn: "Denali",
      lat: 63.0692,
      lon: -151.007,
      country: "آلاسکا",
    },
  ];

  const triviaQuestions = [
    {
      question: "بلندترین کوه جهان چیست؟",
      options: ["کی۲", "اورست", "مون بلان", "ماکالو"],
      correctAnswer: "اورست",
    },
    {
      question: "کوه دماوند در کدام کشور قرار دارد؟",
      options: ["ترکیه", "هند", "ایران", "افغانستان"],
      correctAnswer: "ایران",
    },
    {
      question: "کدام سبک صعود نیاز به ابزار کمکی در دیواره‌نوردی ندارد؟",
      options: ["صعود آزاد", "صعود مصنوعی", "بولدرینگ", "یخ‌نوردی"],
      correctAnswer: "صعود آزاد",
    },
  ];

  const TriviaGame = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const currentQuestion = triviaQuestions[currentQuestionIndex];

    const handleAnswer = (option) => {
      setSelectedOption(option);

      setTimeout(() => {
        if (option === currentQuestion.correctAnswer) {
          setScore(score + 1);
        }

        if (currentQuestionIndex + 1 < triviaQuestions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedOption(null);
        } else {
          setShowResult(true);
        }
      }, 1000);
    };

    const resetGame = () => {
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setScore(0);
      setShowResult(false);
    };

    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        {showResult ? (
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "#2a4a62" }}
            >
              امتیاز شما: {score} از {triviaQuestions.length}
            </h3>
            <button
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "#7ab0c8", color: "white" }}
              onClick={resetGame}
            >
              بازی دوباره
            </button>
          </div>
        ) : (
          <div>
            <h4
              className="text-xl font-semibold mb-6"
              style={{ color: "#446b84" }}
            >
              {currentQuestion.question}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selectedOption}
                  className={`py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    selectedOption === option
                      ? option === currentQuestion.correctAnswer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Simulate weather data fetch (in real app, you'd use OpenWeatherMap API)
  useEffect(() => {
    const fetchWeatherData = async () => {
      setWeatherLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock weather data (replace with real API call)
      const mockWeatherData = {
        "Mount Everest": {
          temp: -25,
          condition: "برفی",
          windSpeed: 45,
          humidity: 65,
          visibility: 2,
          icon: CloudRain,
          gradient: "from-blue-400 to-blue-600",
        },
        K2: {
          temp: -18,
          condition: "ابری",
          windSpeed: 32,
          humidity: 58,
          visibility: 5,
          icon: Cloud,
          gradient: "from-gray-400 to-gray-600",
        },
        "Mont Blanc": {
          temp: -8,
          condition: "آفتابی",
          windSpeed: 18,
          humidity: 45,
          visibility: 15,
          icon: Sun,
          gradient: "from-yellow-400 to-orange-500",
        },
        Matterhorn: {
          temp: -12,
          condition: "برف سبک",
          windSpeed: 25,
          humidity: 70,
          visibility: 8,
          icon: CloudRain,
          gradient: "from-blue-300 to-blue-500",
        },
        Denali: {
          temp: -35,
          condition: "طوفان برف",
          windSpeed: 55,
          humidity: 80,
          visibility: 1,
          icon: CloudRain,
          gradient: "from-indigo-400 to-indigo-700",
        },
      };

      setWeatherData(mockWeatherData);
      setWeatherLoading(false);
    };

    fetchWeatherData();
  }, []);

  const WeatherCard = ({ peak, weather, isLoading }) => {
    if (isLoading) {
      return (
        <div
          className="rounded-2xl overflow-hidden shadow-lg animate-pulse"
          style={{ backgroundColor: "white" }}
        >
          <div className="h-32 bg-gradient-to-br from-gray-300 to-gray-400"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded mb-3"></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      );
    }

    const WeatherIcon = weather.icon;

    return (
      <div
        className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        style={{ backgroundColor: "white" }}
      >
        <div className={`h-32 bg-gradient-to-br ${weather.gradient} relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <WeatherIcon className="w-12 h-12 text-white opacity-80" />
          </div>
          <div className="absolute top-3 right-3 text-white">
            <span className="text-2xl font-bold">{weather.temp}°</span>
          </div>
          <div className="absolute bottom-3 right-3 text-white text-sm font-medium">
            {weather.condition}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1" style={{ color: "#2a4a62" }}>
            {peak.name}
          </h3>
          <p className="text-sm mb-3" style={{ color: "#6585a0" }}>
            {peak.country}
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center">
              <Wind className="w-3 h-3 ml-1" style={{ color: "#7ab0c8" }} />
              <span style={{ color: "#446b84" }}>{weather.windSpeed} km/h</span>
            </div>
            <div className="flex items-center">
              <Droplets className="w-3 h-3 ml-1" style={{ color: "#7ab0c8" }} />
              <span style={{ color: "#446b84" }}>{weather.humidity}%</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-3 h-3 ml-1" style={{ color: "#7ab0c8" }} />
              <span style={{ color: "#446b84" }}>{weather.visibility} km</span>
            </div>
            <div className="flex items-center">
              <Thermometer
                className="w-3 h-3 ml-1"
                style={{ color: "#7ab0c8" }}
              />
              <span style={{ color: "#446b84" }}>
                احساس {weather.temp - 5}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#e1e7f0",
        direction: "rtl",
        fontFamily: "Tahoma, Arial, sans-serif",
      }}
    >
      <Navbar />
      <HeroSection />َ
      <Introduce />
      <PopularPeaks />
      <section
        id="weather"
        className="py-20"
        style={{ backgroundColor: "#c7d8e5" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#2a4a62" }}
            >
              آب و هوای زنده قله‌های محبوب
            </h2>
            <p className="text-xl" style={{ color: "#446b84" }}>
              شرایط آب و هوایی لحظه‌ای بلندترین و محبوب‌ترین قله‌های جهان
            </p>
            <div className="flex items-center justify-center mt-4">
              <div
                className="flex items-center px-4 py-2 rounded-full"
                style={{ backgroundColor: "rgba(122, 176, 200, 0.2)" }}
              >
                <div
                  className="w-2 h-2 rounded-full ml-2 animate-pulse"
                  style={{ backgroundColor: "#7ab0c8" }}
                ></div>
                <span className="text-sm" style={{ color: "#446b84" }}>
                  به‌روزرسانی هر ۳۰ دقیقه
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {popularPeaks.map((peak, index) => (
              <WeatherCard
                key={index}
                peak={peak}
                weather={weatherData[peak.nameEn]}
                isLoading={weatherLoading}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm mb-4" style={{ color: "#6585a0" }}>
              * اطلاعات آب و هوایی از سرویس‌های معتبر بین‌المللی دریافت می‌شود
            </p>
            <button
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: "#7ab0c8",
                color: "white",
                boxShadow: "0 4px 15px rgba(122, 176, 200, 0.3)",
              }}
              onClick={() => window.location.reload()}
            >
              به‌روزرسانی اطلاعات
            </button>
          </div>
        </div>
      </section>
      <section
        className="relative h-[500px] w-full bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `url('/images/climber.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div
            className="w-full h-full bg-gradient-to-br opacity-20"
            style={{
              backgroundImage: `url('/images/climber.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              لمس ارتفاع، فتح اوج
            </h2>
          </div>
        </div>
      </section>
      <PopularClimbingSite />
      <OneDayHiking />
      <section
        id="trivia"
        className="py-20"
        style={{ backgroundColor: "#b2c2d4" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#2a4a62" }}
          >
            بازی کوهستانی
          </h2>
          <p className="text-xl mb-8" style={{ color: "#446b84" }}>
            دانش خود را درباره کوه‌ها و ماجراجویی محک بزنید!
          </p>

          <TriviaGame />
        </div>
      </section>
      <SuggestPeak/>
 
      <Gallery />
      {/* Footer */}
      <Footer />
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(-50%, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(-50%, -10px, 0);
          }
          70% {
            transform: translate3d(-50%, -5px, 0);
          }
          90% {
            transform: translate3d(-50%, -2px, 0);
          }
        }
      `}</style>
    </div>
  );
};

// Missing ArrowLeft import - adding it here
const ArrowLeft = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

export default MountainHomepage;
