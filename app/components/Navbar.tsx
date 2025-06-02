"use client";
import { Menu, Mountain, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  type MenuItem = {
    name: string;
    href: string;
  };
  const menu: MenuItem[] = [
    { name: "خانه", href: "/" },
    { name: "قله ها", href: "/peaks" },
    { name: "سایت های سنگنوردی", href: "/climbingSites" },
  ];
  
  return (
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
          <div className="hidden md:flex gap-6">
            {menu.map((item) => {
              return (
                <Link
                  className="text-[#446b84]  hover:text-[#7ab0c8]"
                  href={item.href}
                >
                  {item.name}
                </Link>
              );
            })}
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
            <a href="#home" className="block py-2" style={{ color: "#446b84" }}>
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
  );
}

export default Navbar;
