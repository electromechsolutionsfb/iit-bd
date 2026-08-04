import React from "react";
import { motion } from "framer-motion";
import { Target, Factory, CheckCircle2, Award, Users, BookOpen, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";
import { Link } from "react-router-dom";

const About = () => {
  const { lang } = useLanguage();

  return (
    <main className="bg-[#f8fafc] text-[#0f172a] min-h-screen pt-32 pb-20 selection:bg-[#00e1bf]/30">
      
      {/* ===== COMPACT HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00b89c]/10 rounded-full blur-[100px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Discover BITI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            {texts.aboutTitle[lang]}
            <span className="text-[#00b89c]">.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {texts.aboutSubtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* ===== MISSION & VISION WITH INDUSTRY IMAGE BG ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-6">
          {[
            {
              icon: <Target className="w-8 h-8" />,
              data: texts.mission,
              img: "https://i.ibb.co.com/kVjGXkQs/12.jpg", // Industry Image
              label: "Mission"
            },
            {
              icon: <Factory className="w-8 h-8" />,
              data: texts.vision,
              img: "https://i.ibb.co.com/M457FTD/00.jpg", // Industry Image
              label: "Vision"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative h-[400px] rounded-[3rem] overflow-hidden group shadow-xl"
            >
              {/* Background Industry Image */}
              <div className="absolute inset-0 z-0">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-[#00b89c] text-white flex items-center justify-center shadow-lg shadow-[#00b89c]/30">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00b89c] mb-2">Our {item.label}</span>
                <h3 className="text-3xl font-black text-white mb-4">{item.data.title[lang]}</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">{item.data.desc[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== MODERN 'WHY CHOOSE US' (COMPACT GRID) ===== */}
      <section className="py-24 bg-white border-y border-gray-100 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-tight">
                {texts.whyTitle[lang]}
              </h2>
            </div>
            <div className="h-px flex-1 bg-gray-100 hidden md:block mx-10 mb-4" />
            <div className="text-[#00b89c] font-black text-sm uppercase tracking-widest">Since 2010</div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {texts.whyItems[lang].map((item, i) => (
              <motion.div
                key={i}
                className="group flex items-center gap-5 bg-[#f8fafc] p-6 rounded-[2rem] border border-transparent hover:border-[#00b89c]/20 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#00b89c] shadow-sm group-hover:bg-[#00b89c] group-hover:text-white transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-sm font-bold text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORLD CLASS STATS (CLEAN & SHARP) ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-[#0f172a] rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
            {/* Background Industry Image with very dark overlay */}
            <div className="absolute inset-0 opacity-20">
                <img src="https://i.ibb.co.com/sJM8ygRn/09.jpg" alt="Stats BG" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {[
                    { icon: Users, stat: texts.stats[lang][0] },
                    { icon: BookOpen, stat: texts.stats[lang][1] },
                    { icon: Award, stat: texts.stats[lang][2] },
                    { icon: ShieldCheck, stat: texts.stats[lang][3] },
                ].map((item, i) => (
                    <div key={i} className="space-y-3">
                        <h3 className="text-4xl md:text-6xl font-black text-white">{item.stat.value}</h3>
                        <p className="text-[#00b89c] text-[10px] font-black uppercase tracking-[0.3em]">{item.stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ===== MINIMAL CTA ===== */}
      <section className="max-w-4xl mx-auto px-6 text-center pt-10">
        <h2 className="text-3xl font-black text-[#0f172a] mb-8">Ready to elevate your technical skills?</h2>
        <Link to="/admission" className="inline-flex items-center gap-3 bg-[#00b89c] text-white px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-lg shadow-[#00b89c]/30">
          Enroll Now <ArrowRight size={20} />
        </Link>
      </section>

    </main>
  );
};

export default About;