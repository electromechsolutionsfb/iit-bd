import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ChevronDown,
  Clock,
  CheckCircle2,
  Award,
  Wrench,
  ShieldCheck,
  Gauge,
  Sparkles,
  ArrowRight,
  Droplets,
  Zap,
  Settings,
  HardHat
} from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

/* ===== Extended Curriculum Data ===== */
const curriculumData = [
  {
    id: 1,
    title: { en: "High-Pressure Boiler Operations", bn: "হাই-প্রেশার বয়লার অপারেশন" },
    duration: { en: "6 Weeks", bn: "৬ সপ্তাহ" },
    icon: <Gauge size={24} />,
    modules: {
      en: ["Fundamentals of industrial boilers", "Operational procedures", "Startup/Shutdown protocols", "Steam pressure control", "Practical sessions"],
      bn: ["ইন্ডাস্ট্রিয়াল বয়লারের মৌলিক ধারণা", "অপারেশন পদ্ধতি", "স্টার্টআপ ও শাটডাউন প্রোটোকল", "স্টিম প্রেশার কন্ট্রোল", "প্র্যাকটিক্যাল সেশন"]
    },
    outcome: { en: "Professional Boiler Operator qualification", bn: "প্রফেশনাল বয়লার অপারেটর যোগ্যতা" }
  },
  {
    id: 2,
    title: { en: "Boiler Maintenance & Troubleshooting", bn: "বয়লার মেইনটেন্যান্স ও ট্রাবলশুটিং" },
    duration: { en: "5 Weeks", bn: "৫ সপ্তাহ" },
    icon: <Wrench size={24} />,
    modules: {
      en: ["Preventive strategies", "Inspection of pipelines", "Leakage detection", "Troubleshooting case studies"],
      bn: ["প্রিভেন্টিভ কৌশল", "পাইপলাইন পরিদর্শন", "লিকেজ শনাক্তকরণ", "ট্রাবলশুটিং কেস স্টাডি"]
    },
    outcome: { en: "Maintenance Technician competency", bn: "মেইনটেন্যান্স টেকনিশিয়ান দক্ষতা" }
  },
  {
    id: 3,
    title: { en: "Industrial Safety & Compliance", bn: "ইন্ডাস্ট্রিয়াল সেফটি ও কমপ্লায়েন্স" },
    duration: { en: "3 Weeks", bn: "৩ সপ্তাহ" },
    icon: <ShieldCheck size={24} />,
    modules: {
      en: ["Safety laws and SOP", "Explosion risk prevention", "PPE usage", "Accident investigation"],
      bn: ["ইন্ডাস্ট্রিয়াল সেফটি আইন ও SOP", "বিস্ফোরণ ঝুঁকি প্রতিরোধ", "PPE ব্যবহার", "দুর্ঘটনা তদন্ত"]
    },
    outcome: { en: "Safety Officer preparedness", bn: "সেফটি অফিসার হিসেবে প্রস্তুতি" }
  },
  {
    id: 4,
    title: { en: "Water Treatment & Chemistry", bn: "ওয়াটার ট্রিটমেন্ট ও কেমিস্ট্রি" },
    duration: { en: "4 Weeks", bn: "৪ সপ্তাহ" },
    icon: <Droplets size={24} />,
    modules: {
      en: ["Feed water quality analysis", "Chemical softening processes", "Corrosion techniques", "Laboratory testing"],
      bn: ["ফিড ওয়াটার বিশ্লেষণ", "কেমিক্যাল সফেনিং", "ক্ষয় প্রতিরোধ কৌশল", "ল্যাবরেটরি টেস্টিং"]
    },
    outcome: { en: "Water Management Specialization", bn: "ওয়াটার ম্যানেজমেন্ট বিশেষজ্ঞ" }
  },
  {
    id: 5,
    title: { en: "Electrical & Instrumentation", bn: "ইলেক্ট্রিক্যাল ও ইনস্ট্রুমেন্টেশন" },
    duration: { en: "4 Weeks", bn: "৪ সপ্তাহ" },
    icon: <Zap size={24} />,
    modules: {
      en: ["Control panel components", "Sensor calibration", "PLC for automation", "Electrical grounding"],
      bn: ["কন্ট্রোল প্যানেল কম্পোনেন্টস", "সেন্সর ক্যালিব্রেশন", "অটোমেশনের জন্য PLC", "ইলেক্ট্রিক্যাল গ্রাউন্ডিং"]
    },
    outcome: { en: "Automation expertise", bn: "অটোমেশন পারদর্শিতা" }
  },
  {
    id: 6,
    title: { en: "Environmental Management", bn: "এনভায়রনমেন্টাল ম্যানেজমেন্ট" },
    duration: { en: "2 Weeks", bn: "২ সপ্তাহ" },
    icon: <Settings size={24} />,
    modules: {
      en: ["Emission monitoring", "Waste heat recovery", "Environmental regulations", "Efficiency optimization"],
      bn: ["ইমিশন মনিটরিং", "ওয়েস্ট হিট রিকভারি", "পরিবেশগত নিয়মাবলী", "দক্ষতা অপ্টিমাইজেশন"]
    },
    outcome: { en: "Sustainable operations competency", bn: "টেকসই অপারেশন দক্ষতা" }
  },
  {
    id: 7,
    title: { en: "Supervisory Leadership", bn: "সুপারভাইজরি লিডারশিপ ট্রেনিং" },
    duration: { en: "3 Weeks", bn: "৩ সপ্তাহ" },
    icon: <HardHat size={24} />,
    modules: {
      en: ["Team management", "Industrial communication", "Conflict resolution", "Project reporting"],
      bn: ["টিম ম্যানেজমেন্ট", "ইন্ডাস্ট্রিয়াল যোগাযোগ", "দ্বন্দ্ব নিরসন", "প্রজেক্ট রিপোর্টিং"]
    },
    outcome: { en: "Plant management readiness", bn: "প্ল্যান্ট ম্যানেজমেন্ট প্রস্তুতি" }
  }
];

const Curriculam = () => {
  const { lang } = useLanguage();
  const [activeId, setActiveId] = useState(null);

  return (
    <main className="min-h-screen pt-32 bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00b89c]/10 rounded-full blur-[120px] -z-10" />
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Educational Framework</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {texts.curriculumTitle[lang]}<span className="text-[#00b89c]">.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            {texts.curriculumSubtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* ===== GORGEOUS ACCORDION LIST ===== */}
      <section className="max-w-4xl mx-auto px-6 mb-32 space-y-4">
        {curriculumData.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group rounded-[2.5rem] border transition-all duration-500 ${
              activeId === course.id ? "bg-white border-[#00b89c] shadow-2xl shadow-[#00b89c]/10" : "bg-white border-gray-100 hover:border-gray-300"
            }`}
          >
            <button onClick={() => setActiveId(activeId === course.id ? null : course.id)} className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none">
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeId === course.id ? "bg-[#00b89c] text-white shadow-lg shadow-[#00b89c]/30" : "bg-[#f8fafc] text-[#00b89c] border border-gray-50"
                }`}>
                  {course.icon}
                </div>
                <div>
                  <h3 className={`text-lg md:text-xl font-black transition-colors ${activeId === course.id ? "text-[#0f172a]" : "text-gray-700"}`}>
                    {course.title[lang]}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold mt-1 uppercase tracking-widest">
                    <Clock size={14} className="text-[#00b89c]" /> {texts.duration[lang]}: {course.duration[lang]}
                  </div>
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeId === course.id ? "bg-[#0f172a] text-white rotate-180" : "bg-gray-100 text-gray-400"}`}>
                <ChevronDown size={20} />
              </div>
            </button>

            <AnimatePresence>
              {activeId === course.id && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}>
                  <div className="px-8 md:px-12 pb-10 ml-0 md:ml-14">
                    <div className="h-px w-full bg-gray-50 mb-8" />
                    <h4 className="font-black text-sm uppercase tracking-widest text-[#00b89c] mb-6">{texts.learningModules[lang]}</h4>
                    <ul className="grid md:grid-cols-1 gap-4 mb-10">
                      {course.modules[lang].map((m, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <CheckCircle2 size={18} className="text-[#00b89c] mt-1 shrink-0" />
                          <span className="text-gray-600 font-medium leading-relaxed">{m}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#f8fafc] border border-gray-100 rounded-3xl p-6 flex items-start gap-4">
                      <Award className="text-[#00b89c] shrink-0" size={24} />
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{texts.programOutcome[lang]}</p>
                         <p className="font-bold text-[#0f172a] leading-tight">{course.outcome[lang]}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>

      {/* ===== COMPACT INDUSTRY CTA ===== */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[3.5rem] overflow-hidden min-h-[400px] flex items-center justify-center group shadow-2xl">
            {/* Background Industry Image with Soft Overlay */}
            <div className="absolute inset-0 z-0">
               <img src="https://i.ibb.co.com/M457FTD/00.jpg" alt="Curriculum" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110" />
               <div className="absolute inset-0 bg-white/85 backdrop-blur-[3px]" />
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-6 py-12">
              <BookOpen className="w-14 h-14 mx-auto mb-8 text-[#00b89c] bg-white p-3 rounded-2xl shadow-xl" />
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#0f172a] leading-tight">
                {texts.curriculumCtaTitle[lang]}
              </h2>
              <p className="mb-10 text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                {texts.curriculumCtaSubtitle[lang]}
              </p>
              <button
                onClick={() => (window.location.href = "/training")}
                className="group relative bg-[#00b89c] text-white px-12 py-5 rounded-[2rem] font-black text-lg overflow-hidden transition-all hover:bg-[#0f172a] hover:scale-105 shadow-xl shadow-[#00b89c]/30 active:scale-95 flex items-center gap-3 mx-auto"
              >
                {texts.viewTrainingDetails[lang]}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Curriculam;