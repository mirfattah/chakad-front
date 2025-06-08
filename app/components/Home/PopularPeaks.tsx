import { Mountain } from "lucide-react";
import Link from "next/link";
import React from "react";

function PopularPeaks() {
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
    {
      name: "توچال",
      state: "تهران",
      alt: "3962 متر",
      info: "آتشفشانی فعال در جنوب شرق ایران",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Taftan_Mountain.jpg/800px-Taftan_Mountain.jpg",
      slug: "tochal",
    },
  ];

  return (
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
            قله‌های پر‌بازدید ایران
          </h2>
          <p className="text-xl" style={{ color: "#446b84" }}>
            با مرتفع‌ترین و شاخص‌ترین قله‌های ایران آشنا شوید
          </p>
        </div>

        <div className="grid  md:grid-cols-3 gap-8">
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
                <Link href={`/peaks/${peak.slug}`}>
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
          <Link href={`/peaks`}>
            <button
              className=" cursor-pointer px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: "#7ab0c8",
                color: "white",
                boxShadow: "0 4px 15px rgba(122, 176, 200, 0.3)",
              }}
            >
              مشاهده همه قله‌ها
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PopularPeaks;
