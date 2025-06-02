"use client";
import React, { useState, useEffect } from "react";
import {
  Mountain,
  Search,
  Filter,
  MapPin,
  Ruler,
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
  ChevronDown,
  X,
} from "lucide-react";

const PeaksListingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("height");
  const [showFilters, setShowFilters] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [weatherLoading, setWeatherLoading] = useState(true);

  // Only 3 mountain peaks
  const allPeaks = [
    {
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
      image: "/images/everest.jpg",
      lat: 27.9881,
      lon: 86.925,
      description: "بلندترین قله جهان، رویای هر کوهنورد حرفه‌ای",
      features: ["منطقه مرگ", "کلاهک برفی", "طوفان شدید"],
    },
    {
      id: 2,
      name: "مون بلان",
      nameEn: "Mont Blanc",
      height: 4809,
      country: "فرانسه/ایتالیا/سوئیس",
      continent: "اروپا",
      difficulty: "متوسط",
      climbingTime: "2-3 روز",
      bestSeason: "تیر-شهریور",
      firstAscent: "1786",
      climbers: "20000+",
      image: "/images/mont-blanc.jpg",
      lat: 45.8326,
      lon: 6.8652,
      description: "بلندترین قله اروپای غربی، قله کلاسیک برای شروع کوهنوردی آلپی",
      features: ["قله کلاسیک", "دسترسی آسان", "مناظر آلپ"],
    },
    {
      id: 3,
      name: "کیلیمانجارو",
      nameEn: "Kilimanjaro",
      height: 5895,
      country: "تانزانیا",
      continent: "آفریقا",
      difficulty: "آسان",
      climbingTime: "5-7 روز",
      bestSeason: "ژانویه-مارس، ژوئن-اکتبر",
      firstAscent: "1889",
      climbers: "35000+",
      image: "/images/kilimanjaro.jpg",
      lat: -3.0674,
      lon: 37.3556,
      description: "بلندترین قله آفریقا، قله آزاد بدون نیاز به تجهیزات تکنیکی",
      features: ["بدون نیاز به تجهیزات تکنیکی", "اکوسیستم‌های متنوع", "کلاهک یخی"],
    },
  ];

  // Mock weather data for 3 peaks
  const mockWeatherData = {
    "Mount Everest": { 
      temp: -25, 
      condition: "برفی", 
      windSpeed: 45, 
      humidity: 65, 
      visibility: 2, 
      icon: CloudRain, 
      gradient: "from-blue-400 to-blue-600" 
    },
    "Mont Blanc": { 
      temp: -8, 
      condition: "آفتابی", 
      windSpeed: 18, 
      humidity: 45, 
      visibility: 15, 
      icon: Sun, 
      gradient: "from-yellow-400 to-orange-500" 
    },
    "Kilimanjaro": { 
      temp: 15, 
      condition: "ابری", 
      windSpeed: 8, 
      humidity: 65, 
      visibility: 12, 
      icon: Cloud, 
      gradient: "from-green-400 to-blue-500" 
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setWeatherData(mockWeatherData);
      setWeatherLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort peaks
  const filteredPeaks = allPeaks
    .filter(peak => {
      const matchesSearch = peak.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           peak.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           peak.country.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesContinent = selectedContinent === "all" || peak.continent === selectedContinent;
      const matchesDifficulty = selectedDifficulty === "all" || peak.difficulty === selectedDifficulty;
      return matchesSearch && matchesContinent && matchesDifficulty;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "height":
          return b.height - a.height;
        case "name":
          return a.name.localeCompare(b.name);
        case "difficulty":
          const difficultyOrder = { "آسان": 1, "متوسط": 2, "سخت": 3, "بسیار سخت": 4 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        case "climbers":
          return parseInt(b.climbers.replace("+", "")) - parseInt(a.climbers.replace("+", ""));
        default:
          return 0;
      }
    });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "آسان": return "#22c55e";
      case "متوسط": return "#f59e0b";
      case "سخت": return "#ef4444";
      case "بسیار سخت": return "#dc2626";
      default: return "#6b7280";
    }
  };

  const PeakCard = ({ peak }) => {
    const weather = weatherData[peak.nameEn];
    
    return (
      <div 
        className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
        style={{ backgroundColor: "white" }}
      >
        <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-500">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute top-4 right-4">
            <div 
              className="px-3 py-1 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: getDifficultyColor(peak.difficulty) }}
            >
              {peak.difficulty}
            </div>
          </div>
          <div className="absolute bottom-4 right-4 text-white">
            <div className="flex items-center mb-1">
              <Mountain className="w-4 h-4 ml-1" />
              <span className="text-lg font-bold">{peak.height.toLocaleString()} م</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-3 h-3 ml-1" />
              <span className="text-sm">{peak.continent}</span>
            </div>
          </div>
        </div>

        {weather && !weatherLoading && (
          <div className={`px-4 py-2 bg-gradient-to-r ${weather.gradient}`}>
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center">
                <weather.icon className="w-4 h-4 ml-2" />
                <span>{weather.condition}</span>
              </div>
              <span className="font-bold">{weather.temp}°C</span>
            </div>
          </div>
        )}

        <div className="p-6">
          <h3 className="font-bold text-xl mb-2" style={{ color: "#2a4a62" }}>
            {peak.name}
          </h3>
          <p className="text-sm mb-3" style={{ color: "#6585a0" }}>
            {peak.nameEn} • {peak.country}
          </p>
          <p className="text-sm mb-4" style={{ color: "#446b84" }}>
            {peak.description}
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 ml-2" style={{ color: "#7ab0c8" }} />
              <span style={{ color: "#446b84" }}>{peak.climbingTime}</span>
            </div>
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 ml-2" style={{ color: "#7ab0c8" }} />
              <span style={{ color: "#446b84" }}>{peak.climbers} کوهنورد</span>
            </div>
            <div className="flex items-center text-sm">
              <Star className="w-4 h-4 ml-2" style={{ color: "#7ab0c8" }} />
              <span style={{ color: "#446b84" }}>اولین صعود: {peak.firstAscent}</span>
            </div>
            <div className="flex items-center text-sm">
              <Sun className="w-4 h-4 ml-2" style={{ color: "#7ab0c8" }} />
              <span style={{ color: "#446b84" }}>{peak.bestSeason}</span>
            </div>
          </div>

          {weather && !weatherLoading && (
            <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-lg" style={{ backgroundColor: "#f8fafc" }}>
              <div className="text-center">
                <Wind className="w-3 h-3 mx-auto mb-1" style={{ color: "#7ab0c8" }} />
                <div className="text-xs" style={{ color: "#446b84" }}>{weather.windSpeed} km/h</div>
              </div>
              <div className="text-center">
                <Droplets className="w-3 h-3 mx-auto mb-1" style={{ color: "#7ab0c8" }} />
                <div className="text-xs" style={{ color: "#446b84" }}>{weather.humidity}%</div>
              </div>
              <div className="text-center">
                <Eye className="w-3 h-3 mx-auto mb-1" style={{ color: "#7ab0c8" }} />
                <div className="text-xs" style={{ color: "#446b84" }}>{weather.visibility} km</div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-1 mb-4">
            {peak.features.map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 rounded-full text-xs"
                style={{ backgroundColor: "rgba(122, 176, 200, 0.2)", color: "#446b84" }}
              >
                {feature}
              </span>
            ))}
          </div>

          <button 
            className="w-full py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-md"
            style={{ backgroundColor: "#7ab0c8", color: "white" }}
          >
            مشاهده جزئیات
          </button>
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
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              فهرست قله‌های جهان
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              کشف بلندترین و زیباترین قله‌های کره زمین
            </p>
            <div className="flex items-center justify-center">
              <div className="flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20">
                <Mountain className="w-5 h-5 ml-2" />
                <span>{allPeaks.length} قله از قاره‌های مختلف</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-0 z-50" style={{ backgroundColor: "#c7d8e5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: "#7ab0c8" }} />
              <input
                type="text"
                placeholder="جستجو قله، کشور یا نام انگلیسی..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 rounded-lg border-0 shadow-sm focus:ring-2 focus:ring-blue-300 outline-none"
                style={{ backgroundColor: "white" }}
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 rounded-lg font-semibold transition-all duration-300"
              style={{ backgroundColor: "#7ab0c8", color: "white" }}
            >
              <Filter className="w-4 h-4 ml-2" />
              فیلترها
              <ChevronDown className={`w-4 h-4 mr-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: "white" }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "#2a4a62" }}>قاره</label>
                  <select
                    value={selectedContinent}
                    onChange={(e) => setSelectedContinent(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
                  >
                    <option value="all">همه قاره‌ها</option>
                    <option value="آسیا">آسیا</option>
                    <option value="اروپا">اروپا</option>
                    <option value="آفریقا">آفریقا</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "#2a4a62" }}>سطح دشواری</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
                  >
                    <option value="all">همه سطوح</option>
                    <option value="آسان">آسان</option>
                    <option value="متوسط">متوسط</option>
                    <option value="بسیار سخت">بسیار سخت</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "#2a4a62" }}>مرتب‌سازی بر اساس</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
                  >
                    <option value="height">ارتفاع (بالا به پایین)</option>
                    <option value="name">نام (الفبایی)</option>
                    <option value="difficulty">سطح دشواری</option>
                    <option value="climbers">تعداد کوهنوردان</option>
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-sm" style={{ color: "#446b84" }}>
                  {filteredPeaks.length} قله یافت شد
                </span>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedContinent("all");
                    setSelectedDifficulty("all");
                    setSortBy("height");
                  }}
                  className="flex items-center text-sm px-3 py-1 rounded-lg transition-all duration-300"
                  style={{ color: "#446b84", backgroundColor: "rgba(122, 176, 200, 0.1)" }}
                >
                  <X className="w-3 h-3 ml-1" />
                  پاک کردن فیلترها
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="py-8" style={{ backgroundColor: "#d4e3f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: "#2a4a62" }}>
                {Math.max(...filteredPeaks.map(p => p.height)).toLocaleString()}
              </div>
              <div className="text-sm" style={{ color: "#446b84" }}>بلندترین قله (متر)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: "#2a4a62" }}>
                {new Set(filteredPeaks.map(p => p.continent)).size}
              </div>
              <div className="text-sm" style={{ color: "#446b84" }}>قاره مختلف</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: "#2a4a62" }}>
                {filteredPeaks.reduce((sum, p) => sum + parseInt(p.climbers.replace("+", "")), 0).toLocaleString()}+
              </div>
              <div className="text-sm" style={{ color: "#446b84" }}>کل کوهنوردان</div>
            </div>
          </div>
        </div>
      </div>

      {/* Peaks Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPeaks.length === 0 ? (
            <div className="text-center py-16">
              <Mountain className="w-16 h-16 mx-auto mb-4 opacity-50" style={{ color: "#7ab0c8" }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#2a4a62" }}>
                هیچ قله‌ای یافت نشد
              </h3>
              <p style={{ color: "#446b84" }}>
                لطفاً فیلترهای خود را تغییر دهید یا جستجوی جدیدی انجام دهید
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPeaks.map((peak) => (
                <PeakCard key={peak.id} peak={peak} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16" style={{ backgroundColor: "#c7d8e5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#2a4a62" }}>
            آماده برای ماجراجویی بعدی خود هستید؟
          </h2>
          <p className="text-xl mb-8" style={{ color: "#446b84" }}>
            با ما برنامه صعود خود را طراحی کنید و به دنیای کوهستان قدم بگذارید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "#7ab0c8", color: "white", boxShadow: "0 4px 15px rgba(122, 176, 200, 0.3)" }}
            >
              شروع برنامه‌ریزی
            </button>
            <button 
              className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2"
              style={{ color: "#7ab0c8", borderColor: "#7ab0c8", backgroundColor: "transparent" }}
            >
              تماس با راهنما
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeaksListingPage;