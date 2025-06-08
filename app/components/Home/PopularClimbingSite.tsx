import { MapPin, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

function PopularClimbingSite() {
  const popularClimbingSites = [
    {
      name: " پل خواب",
      location: " البرز  ",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1580584126903-c17d76b52e67?w=400&h=300&fit=crop",
      type: "صخره‌نوردی کلاسیک",
      slug: "PoleKhab",
    },
    {
      name: "بند یخچال",
      location: " تهران",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1508610048659-a06b669e3880?w=400&h=300&fit=crop",
      type: "بولدرینگ",
      slug: "bandYakhchal",
    },
    {
      name: "سیرا",
      location: "البرز",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1606406055965-3de64be208d2?w=400&h=300&fit=crop",
      type: "اسپرت",
      slug: "sira",
    },
  ];
  return (
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
            سایت‌های محبوب سنگنوردی
          </h2>
          <p className="text-xl" style={{ color: "#446b84" }}>
            معروف‌ترین مناطق سنگنوردی در ایران را کاوش کنید
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
                <Link href={`/climbingSites/${site.slug}`}>
                  <button
                    className="w-full py-2 rounded-lg font-semibold transition-colors duration-300"
                    style={{ backgroundColor: "#a6cddd", color: "#2a4a62" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
                      (e.currentTarget.style.backgroundColor = "#7ab0c8")
                    }
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) =>
                      (e.currentTarget.style.backgroundColor = "#a6cddd")
                    }
                  >
                    اطلاعات بیشتر
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href={`/climbingSites`}>
            <button
              className=" cursor-pointer px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: "#7ab0c8",
                color: "white",
                boxShadow: "0 4px 15px rgba(122, 176, 200, 0.3)",
              }}
            >
              مشاهده همه سایت های سنگنوردی
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PopularClimbingSite;
