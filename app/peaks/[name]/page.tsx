


"use client";
import React, { useState, useEffect } from "react";
import {
  Mountain,
  MapPin,
  Star,
  Clock,
  Users,
  Thermometer,
  Wind,
  Eye,
  Droplets,
  Sun,
  Cloud,
  CloudRain,
  Calendar,
  AlertTriangle,
  TrendingUp,
  Navigation,
  Heart,
  Share2,
  ArrowRight,
  CheckCircle,
  Target
} from "lucide-react";

// Define interfaces for type safety
interface RouteData {
  name: string;
  difficulty: string;
  duration: string;
  camps: number;
  description: string;
}

interface HazardData {
  type: string;
  level: string;
  description: string;
}

interface CostData {
  permit: string;
  guide: string;
  equipment: string;
  total: string;
}

interface WeatherCondition {
  day: string;
  temp: number;
  condition: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface CurrentWeather {
  temp: number;
  condition: string;
  windSpeed: number;
  humidity: number;
  visibility: number;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

interface WeatherData {
  current: CurrentWeather;
  forecast: WeatherCondition[];
}

interface PeakData {
  id: number;
  name: string;
  nameEn: string;
  height: number;
  country: string;
  continent: string;
  difficulty: string;
  climbingTime: string;
  bestSeason: string;
  firstAscent: string;
  climbers: string;
  lat: number;
  lon: number;
  description: string;
  features: string[];
  routes: RouteData[];
  equipment: string[];
  hazards: HazardData[];
  costs: CostData;
  images: string[];
}

interface TabData {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

// interface PeakDetailPageProps {
//   params: {
//     name: string;
//   };
// }

const PeakDetailPage  = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [weatherLoading, setWeatherLoading] = useState<boolean>(true);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);


  
  // Sample peak data - Mount Everest
  const peakData: PeakData = {
    id: 1,
    name: "اورست",
    nameEn: "Mount Everest",
    height: 8849,
    country: "نپال/تبت",
    continent: "آسیا",
    difficulty: "بسیار سخت",
    climbingTime: "60-70 روز",
    bestSeason: "اردیبهشت-خرداد، مهر-آبان",
    firstAscent: "1953",
    climbers: "4000+",
    lat: 27.9881,
    lon: 86.925,
    description: "اورست، بلندترین نقطه زمین، با ارتفاع 8,849 متر در رشته کوه‌های هیمالیا قرار دارد. این قله که به نام سر ادموند هیلاری و تنزینگ نورگای مشهور شده، هر ساله صدها کوهنورد از سراسر جهان را به خود جذب می‌کند. صعود به اورست نه تنها چالشی فیزیکی بلکه آزمونی روحی و روانی است که نیازمند آمادگی کامل و تجربه گسترده در کوهنوردی آلپی می‌باشد.",
    features: ["منطقه مرگ", "کلاهک برفی", "طوفان شدید", "کمبود اکسیژن"],
    routes: [
      {
        name: "مسیر جنوب شرقی (نپال)",
        difficulty: "بسیار سخت",
        duration: "65-70 روز",
        camps: 4,
        description: "مسیر کلاسیک و محبوب‌تر برای صعود"
      },
      {
        name: "مسیر شمال شرقی (تبت)",
        difficulty: "بسیار سخت",
        duration: "60-65 روز",
        camps: 3,
        description: "مسیر فنی‌تر با چالش‌های بیشتر"
      }
    ],
    equipment: [
      "کفش کوهنوردی 8000 متری",
      "لباس پوشش کامل",
      "ماسک اکسیژن",
      "طناب دینامیک",
      "یخ‌شکن و کرامپون",
      "چادر 4 فصل",
      "تجهیزات ارتباطی"
    ],
    hazards: [
      { type: "بهمن", level: "بالا", description: "خطر بهمن در مناطق مختلف" },
      { type: "کمبود اکسیژن", level: "خیلی بالا", description: "در ارتفاعات بالای 8000 متر" },
      { type: "طوفان", level: "بالا", description: "تغییرات آب و هوایی ناگهانی" },
      { type: "سرمازدگی", level: "بالا", description: "دمای زیر منفی 40 درجه" }
    ],
    costs: {
      permit: "11,000 - 25,000 دلار",
      guide: "35,000 - 65,000 دلار",
      equipment: "8,000 - 15,000 دلار",
      total: "65,000 - 100,000 دلار"
    },
    images: [
      "/images/everest-1.jpg",
      "/images/everest-2.jpg",
      "/images/everest-3.jpg",
      "/images/everest-4.jpg"
    ]
  };

  // Mock weather data
  const mockWeatherData: WeatherData = {
    current: {
      temp: -25,
      condition: "برفی",
      windSpeed: 45,
      humidity: 65,
      visibility: 2,
      icon: CloudRain,
      gradient: "from-blue-400 to-blue-600"
    },
    forecast: [
      { day: "امروز", temp: -25, condition: "برفی", icon: CloudRain },
      { day: "فردا", temp: -22, condition: "ابری", icon: Cloud },
      { day: "پس‌فردا", temp: -28, condition: "برفی", icon: CloudRain },
      { day: "3 روز دیگر", temp: -20, condition: "آفتابی", icon: Sun },
      { day: "4 روز دیگر", temp: -24, condition: "ابری", icon: Cloud }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setWeatherData(mockWeatherData);
      setWeatherLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case "آسان": return "#22c55e";
      case "متوسط": return "#f59e0b";
      case "سخت": return "#ef4444";
      case "بسیار سخت": return "#dc2626";
      default: return "#6b7280";
    }
  };

  const getHazardColor = (level: string): string => {
    switch (level) {
      case "کم": return "#22c55e";
      case "متوسط": return "#f59e0b";
      case "بالا": return "#ef4444";
      case "خیلی بالا": return "#dc2626";
      default: return "#6b7280";
    }
  };

  const tabs: TabData[] = [
    { id: "overview", label: "نمای کلی", icon: Mountain },
    { id: "routes", label: "مسیرها", icon: Navigation },
    { id: "weather", label: "آب و هوا", icon: Sun },
    { id: "equipment", label: "تجهیزات", icon: Target },
    { id: "safety", label: "ایمنی", icon: AlertTriangle },
    { id: "costs", label: "هزینه‌ها", icon: TrendingUp }
  ];



  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundColor: "#e1e7f0",
        direction: "rtl",
        fontFamily: "Tahoma, Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div className="relative">
        <div className="h-96 md:h-[500px] bg-gradient-to-br from-gray-300 to-gray-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Back Button */}
          <div className="absolute top-6 right-6 z-10">
            <button className="flex items-center px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300">
              <ArrowRight className="w-4 h-4 ml-2" />
              بازگشت به فهرست
            </button>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-6 left-6 z-10 flex gap-2">
            <button className="p-2 rounded-lg bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-300">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Peak Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {peakData.name}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-4">
                    {peakData.nameEn} • {peakData.country}
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex items-center text-white">
                      <Mountain className="w-5 h-5 ml-2" />
                      <span className="text-lg font-bold">{peakData.height.toLocaleString()} متر</span>
                    </div>
                    <div className="flex items-center text-white">
                      <MapPin className="w-5 h-5 ml-2" />
                      <span>{peakData.continent}</span>
                    </div>
                    <div 
                      className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: getDifficultyColor(peakData.difficulty) }}
                    >
                      {peakData.difficulty}
                    </div>
                  </div>
                </div>

                {/* Weather Widget */}
                {weatherData && !weatherLoading && (
                  <div className="mt-6 md:mt-0">
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${weatherData.current.gradient} bg-opacity-90`}>
                      <div className="text-white text-center">
                        <weatherData.current.icon className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold">{weatherData.current.temp}°C</div>
                        <div className="text-sm">{weatherData.current.condition}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40" style={{ backgroundColor: "#c7d8e5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-white shadow-md' 
                    : 'text-gray-600 hover:bg-white hover:bg-opacity-50'
                }`}
                style={{ 
                  backgroundColor: activeTab === tab.id ? "#7ab0c8" : "transparent"
                }}
              >
                <tab.icon className="w-4 h-4 ml-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2" style={{ color: "#7ab0c8" }} />
                  <div className="text-sm font-semibold" style={{ color: "#2a4a62" }}>مدت صعود</div>
                  <div className="text-lg font-bold" style={{ color: "#446b84" }}>{peakData.climbingTime}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Users className="w-6 h-6 mx-auto mb-2" style={{ color: "#7ab0c8" }} />
                  <div className="text-sm font-semibold" style={{ color: "#2a4a62" }}>کوهنوردان</div>
                  <div className="text-lg font-bold" style={{ color: "#446b84" }}>{peakData.climbers}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Star className="w-6 h-6 mx-auto mb-2" style={{ color: "#7ab0c8" }} />
                  <div className="text-sm font-semibold" style={{ color: "#2a4a62" }}>اولین صعود</div>
                  <div className="text-lg font-bold" style={{ color: "#446b84" }}>{peakData.firstAscent}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2" style={{ color: "#7ab0c8" }} />
                  <div className="text-sm font-semibold" style={{ color: "#2a4a62" }}>بهترین فصل</div>
                  <div className="text-sm font-bold" style={{ color: "#446b84" }}>{peakData.bestSeason}</div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#2a4a62" }}>درباره {peakData.name}</h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#446b84" }}>
                  {showFullDescription ? peakData.description : `${peakData.description.substring(0, 300)}...`}
                </p>
                <button 
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-sm font-semibold hover:underline"
                  style={{ color: "#7ab0c8" }}
                >
                  {showFullDescription ? "کمتر نشان بده" : "ادامه مطلب"}
                </button>
              </div>

              {/* Features */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#2a4a62" }}>ویژگی‌های خاص</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {peakData.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-3 rounded-lg"
                      style={{ backgroundColor: "rgba(122, 176, 200, 0.1)" }}
                    >
                      <CheckCircle className="w-4 h-4 ml-2" style={{ color: "#7ab0c8" }} />
                      <span className="text-sm" style={{ color: "#446b84" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Routes Tab */}
          {activeTab === "routes" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: "#2a4a62" }}>مسیرهای صعود</h2>
              {peakData.routes.map((route, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "#2a4a62" }}>{route.name}</h3>
                      <p style={{ color: "#446b84" }}>{route.description}</p>
                    </div>
                    <div 
                      className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: getDifficultyColor(route.difficulty) }}
                    >
                      {route.difficulty}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 ml-2" style={{ color: "#7ab0c8" }} />
                      <span style={{ color: "#446b84" }}>مدت: {route.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Mountain className="w-4 h-4 ml-2" style={{ color: "#7ab0c8" }} />
                      <span style={{ color: "#446b84" }}>کمپ‌ها: {route.camps}</span>
                    </div>
                    <div className="flex items-center">
                      <Navigation className="w-4 h-4 ml-2" style={{ color: "#7ab0c8" }} />
                      <span style={{ color: "#446b84" }}>مسیر {index === 0 ? 'محبوب' : 'فنی'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Weather Tab */}
          {activeTab === "weather" && weatherData && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: "#2a4a62" }}>وضعیت آب و هوا</h2>
              
              {/* Current Weather */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#2a4a62" }}>وضعیت فعلی</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Thermometer className="w-6 h-6 mx-auto mb-2" style={{ color: "#7ab0c8" }} />
                    <div className="text-sm" style={{ color: "#446b84" }}>دما</div>
                    <div className="text-lg font-bold" style={{ color: "#2a4a62" }}>{weatherData.current.temp}°C</div>
                  </div>
                  <div className="text-center">
                    <Wind className="w-6 h-6 mx-auto mb-2" style={{ color: "#7ab0c8" }} />
                    <div className="text-sm" style={{ color: "#446b84" }}>باد</div>
                    <div className="text-lg font-bold" style={{ color: "#2a4a62" }}>{weatherData.current.windSpeed} km/h</div>
                  </div>
                  <div className="text-center">
                    <Droplets className="w-6 h-6 mx-auto mb-2" style={{ color: "#7ab0c8" }} />
                    <div className="text-sm" style={{ color: "#446b84" }}>رطوبت</div>
                    <div className="text-lg font-bold" style={{ color: "#2a4a62" }}>{weatherData.current.humidity}%</div>
                  </div>
                  <div className="text-center">
                    <Eye className="w-6 h-6 mx-auto mb-2" style={{ color: "#7ab0c8" }} />
                    <div className="text-sm" style={{ color: "#446b84" }}>دید</div>
                    <div className="text-lg font-bold" style={{ color: "#2a4a62" }}>{weatherData.current.visibility} km</div>
                  </div>
                </div>
              </div>

              {/* Forecast */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4" style={{ color: "#2a4a62" }}>پیش‌بینی 5 روزه</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {weatherData.forecast.map((day, index) => (
                    <div key={index} className="text-center p-3 rounded-lg" style={{ backgroundColor: "#f8fafc" }}>
                      <div className="text-sm mb-2" style={{ color: "#446b84" }}>{day.day}</div>
                      <day.icon className="w-6 h-6 mx-auto mb-2"  />
                      <div className="text-sm" style={{ color: "#446b84" }}>{day.condition}</div>
                      <div className="text-lg font-bold" style={{ color: "#2a4a62" }}>{day.temp}°C</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Equipment Tab */}
          {activeTab === "equipment" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: "#2a4a62" }}>تجهیزات مورد نیاز</h2>
              <div className="bg-white p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {peakData.equipment.map((item, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg" style={{ backgroundColor: "#f8fafc" }}>
                      <CheckCircle className="w-5 h-5 ml-3" style={{ color: "#22c55e" }} />
                      <span style={{ color: "#446b84" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Safety Tab */}
          {activeTab === "safety" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: "#2a4a62" }}>خطرات و ایمنی</h2>
              {peakData.hazards.map((hazard, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold" style={{ color: "#2a4a62" }}>{hazard.type}</h3>
                    <div 
                      className="px-3 py-1 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: getHazardColor(hazard.level) }}
                    >
                      سطح {hazard.level}
                    </div>
                  </div>
                  <p style={{ color: "#446b84" }}>{hazard.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Costs Tab */}
          {activeTab === "costs" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold" style={{ color: "#2a4a62" }}>برآورد هزینه‌ها</h2>
              <div className="bg-white p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#f8fafc" }}>
                    <span style={{ color: "#446b84" }}>مجوز صعود</span>
                    <span className="font-bold" style={{ color: "#2a4a62" }}>{peakData.costs.permit}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#f8fafc" }}>
                    <span style={{ color: "#446b84" }}>راهنما و خدمات</span>
                    <span className="font-bold" style={{ color: "#2a4a62" }}>{peakData.costs.guide}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: "#f8fafc" }}>
                    <span style={{ color: "#446b84" }}>تجهیزات</span>
                    <span className="font-bold" style={{ color: "#2a4a62" }}>{peakData.costs.equipment}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-lg border-t-2" style={{ backgroundColor: "rgba(122, 176, 200, 0.1)", borderColor: "#7ab0c8" }}>
                    <span className="font-bold" style={{ color: "#2a4a62" }}>کل هزینه تقریبی</span>
                    <span className="text-xl font-bold" style={{ color: "#7ab0c8" }}>{peakData.costs.total}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16" style={{ backgroundColor: "#c7d8e5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#2a4a62" }}>
            آماده چالش {peakData.name}؟
          </h2>
          <p className="text-xl mb-8" style={{ color: "#446b84" }}>
            با ما تماس بگیرید و برنامه صعود خود را طراحی کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "#7ab0c8", color: "white", boxShadow: "0 4px 15px rgba(122, 176, 200, 0.3)" }}
            >
              درخواست مشاوره
            </button>
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2"
              style={{ color: "#7ab0c8", borderColor: "#7ab0c8", backgroundColor: "transparent" }}
            >
              مشاهده قله‌های مشابه
            </button>
          </div>
        </div>

        </div>
        </div>
  );
};

export default PeakDetailPage;