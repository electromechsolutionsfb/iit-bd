import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Cpu,
  ShieldCheck,
  HardHat,
  Thermometer,
  Settings,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";
import { Link } from "react-router-dom";

const icons = [
  <Factory size={28} />,
  <Thermometer size={28} />,
  <Cpu size={28} />,
  <ShieldCheck size={28} />,
  <HardHat size={28} />,
  <Settings size={28} />,
];

const Facility = () => {
  const { lang } = useLanguage();

  return (
    <main className="bg-[#f8fafc] text-[#0f172a] min-h-screen pt-32 pb-20 selection:bg-[#00e1bf]/30">
      {/* ===== COMPACT HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00b89c]/10 rounded-full blur-[100px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              World-Class Infrastructure
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-[#0f172a]">
            {texts.facilityTitle[lang]}
            <span className="text-[#00b89c]">.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            {texts.facilitySubtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* ===== GORGEOUS FACILITIES GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {texts.facilities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 hover:shadow-2xl hover:shadow-[#00b89c]/10 transition-all duration-500 relative overflow-hidden"
          >
            {/* Animated Hover Background Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-[#00b89c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-[#f8fafc] text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-50">
              {icons[i]}
            </div>

            <h3 className="text-2xl font-black mb-4 text-[#0f172a]">
              {item.title[lang]}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              {item.desc[lang]}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ===== PREMIUM ENVIRONMENT SECTION WITH INDUSTRY IMAGE ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,184,156,0.2)] min-h-[600px] flex items-center">
          {/* Background Industry Overlay - Soft & Premium (No Black) */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://i.ibb.co.com/sJM8ygRn/09.jpg"
              alt="Lab Environment"
              className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
            />
            {/* Soft White/Green Overlay Layer */}
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/40 to-transparent" />
          </div>

          <div className="relative z-10 p-10 md:p-20 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-[#00b89c]" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#00b89c]">
                  Environment
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-8 leading-tight">
                {texts.facilityEnvTitle[lang]}
              </h2>

              <p className="text-gray-600 text-lg md:text-xl font-medium mb-12 leading-relaxed max-w-3xl">
                {texts.facilityEnvDesc[lang]}
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                {texts.facilityEnvPoints[lang].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/60 backdrop-blur-xl border border-white p-6 rounded-[2rem] shadow-sm flex items-center gap-3 group"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#00b89c] shrink-0"
                    />
                    <span className="font-bold text-[#0f172a] text-sm group-hover:text-[#00b89c] transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FINAL MINI CTA ===== */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-10">
        <h2 className="text-3xl font-black text-[#0f172a] mb-8">
          Want to see our facilities in person?
        </h2>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#00b89c] text-white px-12 py-5 rounded-2xl font-black text-lg shadow-xl shadow-[#00b89c]/30 hover:bg-[#00e1bf] transition-all"
          >
            Book a Campus Tour <ArrowRight size={20} />
          </motion.button>
        </Link>
      </section>
    </main>
  );
};

export default Facility;
