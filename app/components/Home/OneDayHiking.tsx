import { MapPin, Star } from "lucide-react";
import React from "react";

function OneDayHiking() {
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
  return (
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
            کوه پیمایی یک روزه
          </h2>
          <p className="text-xl" style={{ color: "#446b84" }}>
            مقاصد محبوب یک روزه را در سراسر ایران پیدا کنید
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
  );
}

export default OneDayHiking;
