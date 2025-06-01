import { MapPin, Mountain, Star } from "lucide-react";
import React from "react";

function Introduce() {
  return (
    <section
      id="intro"
      className="py-20 bg-gradient-to-br from-[#e6eff5] to-[#d2e0ea]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2a4a62] animate-fade-in">
          خوش آمدید به دنیای ارتفاعات
        </h2>
        <p className="text-lg md:text-xl text-[#446b84] mb-8 leading-relaxed animate-fade-in delay-150">
          اینجا جایی‌ست برای عاشقان کوه، صعود و ماجراجویی! ما با هدف معرفی
          قله‌ها، مکان‌های صخره‌نوردی، وضعیت آب و هوا و بازی‌های تعاملی در حوزه
          کوهنوردی در کنار شما هستیم.
        </p>
        <div className="flex justify-center gap-6 flex-wrap animate-fade-in delay-300">
          <div className="bg-white p-6 rounded-2xl shadow-md w-72 hover:shadow-xl transition-shadow">
            <Mountain className="w-10 h-10 text-[#7ab0c8] mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-[#2a4a62] mb-2">
              اکتشاف قله‌ها
            </h4>
            <p className="text-sm text-[#6585a0]">
              اطلاعات کامل درباره قله‌های ایران و جهان با جزئیات ارتفاع، موقعیت
              و ویژگی‌ها
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md w-72 hover:shadow-xl transition-shadow">
            <MapPin className="w-10 h-10 text-[#7ab0c8] mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-[#2a4a62] mb-2">
              راه‌یابی و جهت‌یابی
            </h4>
            <p className="text-sm text-[#6585a0]">
              مسیرها و مکان‌های برتر صعود با امکانات نقشه و موقعیت‌یابی دقیق
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md w-72 hover:shadow-xl transition-shadow">
            <Star className="w-10 h-10 text-[#7ab0c8] mx-auto mb-4" />
            <h4 className="text-lg font-semibold text-[#2a4a62] mb-2">
              ماجراجویی پنج ستاره
            </h4>
            <p className="text-sm text-[#6585a0]">
              تجربه‌ای فراموش‌نشدنی با طراحی مدرن، محتوای جذاب و حس واقعی
              کوهستان
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduce;
