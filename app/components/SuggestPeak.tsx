import { Check } from "lucide-react";
import React, { useState } from "react";

const iranStates = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
  "یزد",
];

function SuggestPeak() {
  const [peakName, setPeakName] = useState("");
  const [province, setProvince] = useState("");

  const handleSubmit = () => {
    if (!peakName || !province) {
      alert("لطفاً نام قله و استان را وارد کنید.");
      return;
    }

    console.log("Submitted:", { peakName, province });
    alert(`قله ${peakName} در استان ${province} با موفقیت ارسال شد!`);
    setPeakName("");
    setProvince("");
  };

  return (
    <section className="py-20" style={{ backgroundColor: "#d1e5ed" }}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: "#2a4a62" }}
        >
          قله مورد نظرت رو توی چکاد پیدا نکردی؟
        </h2>
        <p className="text-xl mb-8" style={{ color: "#446b84" }}>
          اسم قله و استانش رو برای ما بفرست
        </p>
        <div className="flex  gap-4 items-center">
          <input
            type="text"
            placeholder="نام قله"
            value={peakName}
            onChange={(e) => setPeakName(e.target.value)}
            className="px-4 py-3 rounded-full bg-[#b2c2d4] text-gray-800 w-72 text-right text-sm"
          />
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="px-4  bg-[#b2c2d4] text-gray-800 py-3 rounded-full w-72 text-center text-sm"
          >
            <option  value="">انتخاب استان</option>
            {iranStates.map((state, idx) => (
              <option  key={idx} value={state}>
                {state}
              </option>
            ))}
          </select>
          <button
            onClick={handleSubmit}
            className="cursor-pointer px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            style={{
              backgroundColor: "#7ab0c8",
              color: "white",
              boxShadow: "0 6px 20px rgba(122, 176, 200, 0.4)",
            }}
          >
            ثبت
            <Check className="w-5 h-5 mr-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SuggestPeak;
