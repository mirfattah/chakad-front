"use client";
import React, { useState, useEffect } from "react";
import {
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Eye,
  Droplets,
  LucideIcon,
} from "lucide-react";
import HeroSection from "./components/Home/HeroSection";
import PopularPeaks from "./components/Home/PopularPeaks";
import PopularClimbingSite from "./components/Home/PopularClimbingSite";
import OneDayHiking from "./components/Home/OneDayHiking";
import Gallery from "./components/Home/Gallery";
import Introduce from "./components/Home/Introduce";
import SuggestPeak from "./components/SuggestPeak";

// Define interfaces for type safety
interface Peak {
  name: string;
  nameEn: string;
  lat: number;
  lon: number;
  country: string;
}

interface Weather {
  temp: number;
  condition: string;
  windSpeed: number;
  humidity: number;
  visibility: number;
  icon: LucideIcon;
  gradient: string;
}

interface WeatherData {
  [key: string]: Weather;
}

interface WeatherCardProps {
  peak: Peak;
  weather: Weather;
  isLoading: boolean;
}

const MountainHomepage = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [weatherLoading, setWeatherLoading] = useState(true);
  
  // Popular mountain peaks for weather data
  const popularPeaks: Peak[] = [
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

  // Simulate weather data fetch (in real app, you'd use OpenWeatherMap API)
  useEffect(() => {
    const fetchWeatherData = async () => {
      setWeatherLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock weather data (replace with real API call)
      const mockWeatherData: WeatherData = {
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

  const WeatherCard = ({ peak, weather, isLoading }: WeatherCardProps) => {
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
  
      <HeroSection />
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
      <SuggestPeak/>
      <Gallery />
    </div>
  );
};

export default MountainHomepage;