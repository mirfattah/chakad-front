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
} from "lucide-react";

const MountainHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const iranPeaks = [
    {
      name: "دماوند",
      state: "مازندران",
      alt: "۵۶۱۰ متر",
      info: "بلندترین قله ایران و خاورمیانه، آتشفشانی نیمه‌فعال",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mount_Damavand_in_summer.jpg/800px-Mount_Damavand_in_summer.jpg",
      slug: "damavand",
    },
    {
      name: "سبلان",
      state: "اردبیل",
      alt: "۴۸۱۱ متر",
      info: "قله‌ای با دریاچه در دهانه آتشفشانی، مقصد محبوب کوهنوردی",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Sabalan_Summit_Lake.jpg/800px-Sabalan_Summit_Lake.jpg",
      slug: "sabalan",
    },
    {
      name: "علم‌کوه",
      state: "مازندران",
      alt: "۴۸۵۰ متر",
      info: "دومین قله مرتفع ایران با دیواره معروف شمالی",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Alam_Kuh.jpg/800px-Alam_Kuh.jpg",
      slug: "alamkuh",
    },
    {
      name: "زردکوه",
      state: "چهارمحال و بختیاری",
      alt: "۴۲۲۱ متر",
      info: "منبع اصلی رودخانه کارون، واقع در زاگرس",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Zardkuh.jpg/800px-Zardkuh.jpg",
      slug: "zardkuh",
    },
    {
      name: "تفتان",
      state: "سیستان و بلوچستان",
      alt: "۳۹۴۱ متر",
      info: "آتشفشانی فعال در جنوب شرق ایران",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Taftan_Mountain.jpg/800px-Taftan_Mountain.jpg",
      slug: "taftan",
    },
  ];

  const destinations = [
    {
      name: "قله آلپاین",
      location: "آلپ سوئیس",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      difficulty: "پیشرفته",
    },
    {
      name: "قله‌های مه‌آلود",
      location: "کوه‌های راکی",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=400&h=300&fit=crop",
      difficulty: "متوسط",
    },
    {
      name: "رشته کوه کریستال",
      location: "کوه‌های کانادا",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
      difficulty: "مبتدی",
    },
  ];

  const features = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "راهنمایان متخصص",
      description: "راهنمایان حرفه‌ای کوهنوردی با سال‌ها تجربه",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "مکان‌های برتر",
      description: "مقاصد کوهستانی منتخب در سراسر جهان",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "تجربه ۵ ستاره",
      description: "ماجراجویی‌های فراموش‌نشدنی با خدمات ممتاز",
    },
  ];

  const popularClimbingSites = [
    {
      name: " پل خواب",
      location: "پارک ملی یوسمیتی، آمریکا",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1580584126903-c17d76b52e67?w=400&h=300&fit=crop",
      type: "صخره‌نوردی کلاسیک",
    },
    {
      name: "بند یخچال",
      location: "یوتا، آمریکا",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1508610048659-a06b669e3880?w=400&h=300&fit=crop",
      type: "بولدرینگ",
    },
    {
      name: "سیرا",
      location: "اسپانیا",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1606406055965-3de64be208d2?w=400&h=300&fit=crop",
      type: "اسپرت",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      title: "قله برفی آلپ",
      category: "کوهنوردی",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1464822759844-d150baec0494?w=600&h=400&fit=crop",
      title: "دریاچه کوهستانی",
      category: "طبیعت",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop",
      title: "غروب در کوهستان",
      category: "منظره",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600&h=400&fit=crop",
      title: "مسیر کوهنوردی",
      category: "ماجراجویی",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
      title: "کلبه کوهستانی",
      category: "اقامت",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1478662396123-51f6b85e0097?w=600&h=400&fit=crop",
      title: "جنگل کوهستانی",
      category: "طبیعت",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1587502537745-84b86da1204f?w=600&h=400&fit=crop",
      title: "کوهنوردان",
      category: "ماجراجویی",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=600&h=400&fit=crop",
      title: "آبشار کوهستانی",
      category: "طبیعت",
    },
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

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
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor:
            scrollY > 50 ? "rgba(225, 231, 240, 0.95)" : "transparent",
          backdropFilter: scrollY > 50 ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Mountain className="w-8 h-8" style={{ color: "#2a4a62" }} />
              <span className="text-2xl font-bold" style={{ color: "#2a4a62" }}>
                چکاد
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a
                href="#home"
                className="transition-colors duration-300"
                style={{ color: "#446b84" }}
                onMouseEnter={(e) => (e.target.style.color = "#7ab0c8")}
                onMouseLeave={(e) => (e.target.style.color = "#446b84")}
              >
                خانه
              </a>
              <a
                href="#weather"
                className="transition-colors duration-300"
                style={{ color: "#446b84" }}
                onMouseEnter={(e) => (e.target.style.color = "#7ab0c8")}
                onMouseLeave={(e) => (e.target.style.color = "#446b84")}
              >
                آب و هوا
              </a>
              <a
                href="#destinations"
                className="transition-colors duration-300"
                style={{ color: "#446b84" }}
                onMouseEnter={(e) => (e.target.style.color = "#7ab0c8")}
                onMouseLeave={(e) => (e.target.style.color = "#446b84")}
              >
                مقاصد
              </a>
              <a
                href="#gallery"
                className="transition-colors duration-300"
                style={{ color: "#446b84" }}
                onMouseEnter={(e) => (e.target.style.color = "#7ab0c8")}
                onMouseLeave={(e) => (e.target.style.color = "#446b84")}
              >
                گالری
              </a>
              <a
                href="#about"
                className="transition-colors duration-300"
                style={{ color: "#446b84" }}
                onMouseEnter={(e) => (e.target.style.color = "#7ab0c8")}
                onMouseLeave={(e) => (e.target.style.color = "#446b84")}
              >
                درباره ما
              </a>
              <a
                href="#contact"
                className="transition-colors duration-300"
                style={{ color: "#446b84" }}
                onMouseEnter={(e) => (e.target.style.color = "#7ab0c8")}
                onMouseLeave={(e) => (e.target.style.color = "#446b84")}
              >
                تماس
              </a>
              <button
                className="px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: "#7ab0c8",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(122, 176, 200, 0.3)",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#6585a0")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#7ab0c8")
                }
              >
                رزرو کنید
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" style={{ backgroundColor: "#e1e7f0" }}>
            <div className="px-4 py-2 space-y-2">
              <a
                href="#home"
                className="block py-2"
                style={{ color: "#446b84" }}
              >
                خانه
              </a>
              <a
                href="#weather"
                className="block py-2"
                style={{ color: "#446b84" }}
              >
                آب و هوا
              </a>
              <a
                href="#destinations"
                className="block py-2"
                style={{ color: "#446b84" }}
              >
                مقاصد
              </a>
              <a
                href="#gallery"
                className="block py-2"
                style={{ color: "#446b84" }}
              >
                گالری
              </a>
              <a
                href="#about"
                className="block py-2"
                style={{ color: "#446b84" }}
              >
                درباره ما
              </a>
              <a
                href="#contact"
                className="block py-2"
                style={{ color: "#446b84" }}
              >
                تماس
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-gradient-to-br opacity-20"
            style={{
              background: `linear-gradient(135deg, #a6cddd 0%, #7ab0c8 50%, #6585a0 100%)`,
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in"
            style={{ color: "#2a4a62" }}
          >
            کشف کنید
            <span className="block" style={{ color: "#7ab0c8" }}>
              کوه‌های شگفت‌انگیز
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8" style={{ color: "#446b84" }}>
            ماجراجویی‌های نفس‌گیر را در دیدنی‌ترین رشته کوه‌های جهان تجربه کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8" style={{ color: "#7ab0c8" }} />
        </div>
      </section>

      {/* Live Weather Section */}
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

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: "#d1e5ed" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#2a4a62" }}
            >
              چرا ما را انتخاب کنید
            </h2>
            <p className="text-xl" style={{ color: "#446b84" }}>
              ما تجربه‌های بی‌نظیر کوهستانی را با ایمنی و کیفیت ارائه می‌دهیم
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "white" }}
              >
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                  style={{ backgroundColor: "#a6cddd" }}
                >
                  <div style={{ color: "#2a4a62" }}>{feature.icon}</div>
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#2a4a62" }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "#446b84" }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative h-96 w-full bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: `url('https://64.media.tumblr.com/d8e4da6b9527261d1e5aa427d2249f1a/tumblr_no0gnzhoqW1urfjswo1_540.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            لمس ارتفاع، فتح اوج
          </h2>
        </div>
      </section>

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

      <section
        id="iran-peaks"
        className="py-20"
        style={{ backgroundColor: "#e1e7f0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#2a4a62" }}
            >
              قله‌های برتر ایران
            </h2>
            <p className="text-xl" style={{ color: "#446b84" }}>
              با مرتفع‌ترین و شاخص‌ترین قله‌های ایران آشنا شوید
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {iranPeaks.map((peak, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: "white" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={peak.image}
                    alt={peak.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute bottom-2 right-2 bg-white/80 text-xs px-3 py-1 rounded-full text-gray-800 shadow">
                    {peak.state}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#2a4a62" }}
                  >
                    {peak.name}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: "#6585a0" }}>
                    <Mountain className="w-4 h-4 inline ml-1" />
                    ارتفاع: {peak.alt}
                  </p>
                  <p className="text-sm mb-4" style={{ color: "#446b84" }}>
                    {peak.info}
                  </p>
                  <a href={`/peaks/${peak.slug}`}>
                    <button
                      className="w-full py-2 rounded-lg font-semibold transition-colors duration-300"
                      style={{ backgroundColor: "#a6cddd", color: "#2a4a62" }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#7ab0c8")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#a6cddd")
                      }
                    >
                      مشاهده جزئیات
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: "#7ab0c8",
                color: "white",
                boxShadow: "0 4px 15px rgba(122, 176, 200, 0.3)",
              }}
            >
              مشاهده همه قله‌ها
            </button>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section
        id="gallery"
        className="py-20"
        style={{ backgroundColor: "#b2c2d4" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#2a4a62" }}
            >
              گالری تصاویر
            </h2>
            <p className="text-xl" style={{ color: "#446b84" }}>
              لحظات زیبا و خاطره‌انگیز از ماجراجویی‌های کوهستانی
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openImageModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 left-4">
                    <h4 className="text-white font-semibold text-lg mb-1">
                      {image.title}
                    </h4>
                    <span
                      className="text-white/80 text-sm px-2 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(122, 176, 200, 0.8)" }}
                    >
                      {image.category}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4 flex space-x-2 space-x-reverse">
                    <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Camera className="w-5 h-5 text-white opacity-70" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: "#7ab0c8",
                color: "white",
                boxShadow: "0 4px 15px rgba(122, 176, 200, 0.3)",
              }}
            >
              مشاهده همه تصاویر
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 left-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeImageModal}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">
                {selectedImage.title}
              </h3>
              <span
                className="text-white/80 px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: "rgba(122, 176, 200, 0.8)" }}
              >
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      <section
        id="climbing-sites"
        className="py-20"
        style={{ backgroundColor: "#c7d8e5" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#2a4a62" }}
            >
              سایت‌های محبوب صخره‌نوردی
            </h2>
            <p className="text-xl" style={{ color: "#446b84" }}>
              معروف‌ترین مناطق صخره‌نوردی در جهان را کاوش کنید
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularClimbingSites.map((site, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: "white" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={site.image}
                    alt={site.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: "#7ab0c8", color: "white" }}
                  >
                    {site.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#2a4a62" }}
                    >
                      {site.name}
                    </h3>
                    <div className="flex items-center">
                      <Star
                        className="w-4 h-4 fill-current ml-1"
                        style={{ color: "#7ab0c8" }}
                      />
                      <span style={{ color: "#446b84" }}>{site.rating}</span>
                    </div>
                  </div>
                  <p className="mb-4" style={{ color: "#6585a0" }}>
                    <MapPin className="w-4 h-4 inline ml-1" />
                    {site.location}
                  </p>
                  <button
                    className="w-full py-2 rounded-lg font-semibold transition-colors duration-300"
                    style={{ backgroundColor: "#a6cddd", color: "#2a4a62" }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#7ab0c8")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#a6cddd")
                    }
                  >
                    اطلاعات بیشتر
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section
        id="destinations"
        className="py-20"
        style={{ backgroundColor: "#e1e7f0" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#2a4a62" }}
            >
              مقاصد محبوب
            </h2>
            <p className="text-xl" style={{ color: "#446b84" }}>
              مقاصد کوهستانی منتخب ما را در سراسر جهان کشف کنید
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: "white" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: "#7ab0c8", color: "white" }}
                  >
                    {destination.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#2a4a62" }}
                    >
                      {destination.name}
                    </h3>
                    <div className="flex items-center">
                      <Star
                        className="w-4 h-4 fill-current ml-1"
                        style={{ color: "#7ab0c8" }}
                      />
                      <span style={{ color: "#446b84" }}>
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                  <p className="mb-4" style={{ color: "#6585a0" }}>
                    <MapPin className="w-4 h-4 inline ml-1" />
                    {destination.location}
                  </p>
                  <button
                    className="w-full py-2 rounded-lg font-semibold transition-colors duration-300"
                    style={{ backgroundColor: "#a6cddd", color: "#2a4a62" }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#7ab0c8")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#a6cddd")
                    }
                  >
                    اطلاعات بیشتر
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#d1e5ed" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#2a4a62" }}
          >
            آماده برای ماجراجویی بعدی هستید؟
          </h2>
          <p className="text-xl mb-8" style={{ color: "#446b84" }}>
            به هزاران ماجراجوی که جادوی کاوش کوهستان را با ما کشف کرده‌اند
            بپیوندید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              style={{
                backgroundColor: "#7ab0c8",
                color: "white",
                boxShadow: "0 6px 20px rgba(122, 176, 200, 0.4)",
              }}
            >
              همین الان سفر خود را رزرو کنید
              <ArrowLeft className="w-5 h-5 mr-2" />
            </button>
            <div className="flex items-center" style={{ color: "#446b84" }}>
              <Users className="w-5 h-5 ml-2" />
              <span>بیش از ۱۰,۰۰۰ ماجراجو عضو ما هستند</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: "#2a4a62" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 space-x-reverse mb-4">
                <Mountain className="w-8 h-8" style={{ color: "#7ab0c8" }} />
                <span className="text-2xl font-bold" style={{ color: "white" }}>
                  قله کوهستان
                </span>
              </div>
              <p style={{ color: "#a6cddd" }}>
                از سال ۱۳۸۹ خالق ماجراجویی‌های فراموش‌نشدنی کوهستانی
              </p>
            </div>
            <div>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: "white" }}
              >
                لینک‌های سریع
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" style={{ color: "#a6cddd" }}>
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#a6cddd" }}>
                    مقاصد
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#a6cddd" }}>
                    تورها
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#a6cddd" }}>
                    تماس
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: "white" }}
              >
                پشتیبانی
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" style={{ color: "#a6cddd" }}>
                    مرکز راهنمایی
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#a6cddd" }}>
                    راهنمای ایمنی
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#a6cddd" }}>
                    شرایط خدمات
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#a6cddd" }}>
                    حریم خصوصی
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: "white" }}
              >
                ارتباط
              </h4>
              <p style={{ color: "#a6cddd" }}>
                ما را دنبال کنید تا از الهامات کوهستانی و نکات ماجراجویی مطلع
                شوید
              </p>
            </div>
          </div>
          <div
            className="border-t mt-8 pt-8"
            style={{ borderColor: "#446b84" }}
          >
            <p className="text-center" style={{ color: "#a6cddd" }}>
              © ۱۴۰۳ قله کوهستان. تمام حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>

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
