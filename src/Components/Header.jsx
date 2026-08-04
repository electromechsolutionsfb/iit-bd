import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { name: texts.nav.home[lang], path: "/" },
    { name: texts.nav.about[lang], path: "/about" },
    { name: texts.nav.facilities[lang], path: "/facility" },
    { name: texts.nav.training[lang], path: "/training" },
    { name: texts.nav.contact[lang], path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? "py-2 bg-white/90 backdrop-blur-2xl shadow-xl border-b border-gray-100" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center">

            {/* ===== BITI LOGO ===== */}
            <Link to="/" className="relative z-10 transition-transform hover:scale-105 active:scale-95">
              <img
                src="https://i.ibb.co.com/cKgc3TgP/Update-Logo-BITI.png"
                alt="BITI Logo"
                className="h-14 md:h-16 w-auto rounded-full object-contain"
              />
            </Link>

            {/* ===== DESKTOP MENU (Theme Colored Active Tab) ===== */}
            <div className={`hidden lg:flex items-center gap-1 p-1 rounded-full border transition-all duration-500 ${
              isScrolled ? "bg-gray-50 border-gray-200" : "bg-white/10 backdrop-blur-md border-white/20"
            }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-6 py-2.5 text-sm font-black rounded-full transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-white bg-[#00b89c]"
                      : "text-[#0f172a] hover:text-[#00b89c]"
                  }`}
                >
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="activeHeaderTab"
                      className="absolute inset-0 bg-[#00b89c] rounded-full -z-10 shadow-lg shadow-[#00b89c]/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              ))}
            </div>

            {/* ===== THEME COLORED APPLY BUTTON ===== */}
            <div className="flex items-center gap-4">
              <Link
                to="/admission"
                className="hidden md:flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-black transition-all bg-[#00b89c] text-white shadow-lg shadow-[#00b89c]/30 hover:bg-[#0f172a] hover:shadow-none active:scale-95"
              >
                Apply Now <ArrowRight size={16} />
              </Link>

              {/* Mobile Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                  isScrolled ? "bg-gray-100 text-[#0f172a]" : "bg-white shadow-lg text-[#0f172a]"
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0f172a]/70 backdrop-blur-sm z-[90]"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[100] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <img
                  src="https://i.ibb.co.com/cKgc3TgP/Update-Logo-BITI.png"
                  alt="BITI Logo"
                  className="h-12 w-auto"
                />
                <button onClick={() => setIsOpen(false)} className="text-[#0f172a]"><X size={28} /></button>
              </div>

              <div className="space-y-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between p-5 rounded-2xl font-black text-xl transition-all ${
                        isActive(link.path)
                          ? "bg-[#00b89c] text-white shadow-lg shadow-[#00b89c]/20"
                          : "text-gray-500 hover:bg-gray-50 hover:text-[#00b89c]"
                      }`}
                    >
                      {link.name}
                      <ArrowRight size={20} className={isActive(link.path) ? "opacity-100" : "opacity-0"} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Need Help?</p>
                  <p className="text-[#0f172a] font-black">info@bitibd.com</p>
                </div>
                <Link
                  to="/admission"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full bg-[#00b89c] text-white py-5 rounded-[2.5rem] font-black text-xl shadow-xl shadow-[#00b89c]/30 active:scale-95"
                >
                  Join BITI Today
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;