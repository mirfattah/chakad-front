import { Mountain } from "lucide-react";
import React from "react";

function Footer() {
  return (
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
              ما را دنبال کنید تا از الهامات کوهستانی و نکات ماجراجویی مطلع شوید
            </p>
          </div>
        </div>
        <div className="border-t mt-8 pt-8" style={{ borderColor: "#446b84" }}>

          <p className="text-center" style={{ color: "#a6cddd" }}>
            ساخته شده توسط عشق به کوهستان
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
