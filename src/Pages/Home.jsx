import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Gauge,
  ShieldCheck,
  Wrench,
  Bell,
  Users,
  BookOpen,
  Factory,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  GraduationCap,
  Flame,
  Check,
  Star,
  Target,
  FileText,
  UserCheck,
  Calendar,
  Clock,
  Award,
  Layers,
  X,
  ArrowRight,
  Info
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

/* ===== Gallery Images ===== */
const galleryImages = [
  "https://i.ibb.co.com/twwfscp4/Whats-App-Image-2026-07-05-at-12-16-28-PM-1-acwa.jpg",
  "https://i.ibb.co.com/Y4WcMFpC/Whats-App-Image-2026-07-05-at-11-55-30-AM.jpg",
  "https://i.ibb.co.com/tTy3zjWT/Whats-App-Image-2026-06-06-at-4-05-06-PM.jpg",
  "https://i.ibb.co.com/fVM8j3cB/Whats-App-Image-2026-06-09-at-10-29-55-AM.jpg",
];

/* ===== Notice Data ===== */
const noticesData = [
  {
    id: 1,
    date: "15 August 2026",
    title: "এনরোলমেন্ট ও ওরিয়েন্টেশন নোটিশ",
    details: "আমাদের মোট ৩৫টি আসন মাত্র, তাই দ্রুত আবেদন করুন।"
  },
  {
    id: 2,
    date: "10 August 2026",
    title: "গ্রেড-৩ লাইসেন্স পরীক্ষার সিলেবাস ও প্রস্তুতি নির্দেশিকা",
    details: "বয়লার আইন ২০২২ এবং বয়লার বিধিমালা ২০২৫ অনুসরণে গ্রেড-৩ লাইসেন্স পরীক্ষার সিলেবাস আপডেট করা হয়েছে।"
  },
  {
    id: 3,
    date: "01 August 2026",
    title: "সকল ব্যাচেই সফল প্র্যাকটিক্যাল ল্যাব সম্পন্ন করা হয়",
    details: "ইন-হাউস বয়লার প্ল্যান্টে প্রতি ব্যাচের শিক্ষার্থীদের সফলভাবে ৬০ ঘণ্টার প্র্যাকটিক্যাল ল্যাব সম্পন্ন হয়।"
  }
];

/* ===== Syllabus Modules (Extracted from Syllabus) ===== */
const syllabusModules = [
  {
    module: "মডিউল ০১: বয়লার আইন ও বেসিকস",
    topics: "Boiler Act 2022, Boiler Rules 2025, Layout, Fire & Structural Safety, Classification of Boilers"
  },
  {
    module: "মডিউল ০২: প্রেসার পার্টস ও মাউন্টিং",
    topics: "Drums, Tubes, Safety Valves, Main Steam Stop Valve, Water Level Indicator, Gauge Glass"
  },
  {
    module: "মডিউল ০৩: এক্সেসরিজ ও ওয়াটার ট্রিটমেন্ট",
    topics: "Economizer, Superheater, Water Softeners, RO & DM Plant, Chemical Dosages, pH & TDS Control"
  },
  {
    module: "মডিউল ০৪: ফায়ারিং সিস্টেম ও বার্নার কন্ট্রোল",
    topics: "Gas Burner Parts, Liquid & Solid Fuel Firing, Draft Systems, Solenoid Valves & Automation Controls"
  },
  {
    module: "মডিউল ০৫: SOP, স্টার্ট-আপ ও শাটডাউন",
    topics: "Pre-start up checks, Cold/Hot Startup procedures for Gas/Liquid Boilers, Emergency Shutdown SOP"
  },
  {
    module: "মডিউল ০৬: মেইনটেন্যান্স, সেফটি ও টেস্ট",
    topics: "Daily to Yearly Troubleshooting, Safety Valve Testing, Hydraulic Test, Log Sheet & Case Studies"
  }
];

const highlights = [
  {
    icon: Flame,
    title: { en: "ইন-হাউস ইন্ডাস্ট্রিয়াল বয়লার ল্যাব", en: "In-House Industrial Boiler Lab" },
    desc: {
      en: "আমাদের নিজেদের বয়লার প্ল্যান্টে অভিজ্ঞ অপারেটর দ্বারা ৬০ ঘণ্টার সরাসরি হাতে-কলমে প্র্যাকটিক্যাল।",
      en: "60 hours of direct hands-on practical training at our own industrial boiler setup."
    }
  },
  {
    icon: Award,
    title: { en: "গ্রেড-৩ লাইসেন্স প্রস্তুতি", en: "Grade-3 License Exam Ready" },
    desc: {
      en: "বয়লার আইন ২০২২ ও বিধিমালা ২০২৫ অনুযায়ী সরকারি পরীক্ষায় পাসের উপযোগী করে প্রস্তুত করা হয়।",
      en: "Tailored curriculum following Boiler Act 2022 & Rules 2025 for licensing exams."
    }
  },
  {
    icon: Users,
    title: { en: "সীমিত আসন (সর্বোচ্চ ৩৫ জন)", en: "Limited Batch Seats (Max 35)" },
    desc: {
      en: "গুণগত মান ও নিবিড় প্র্যাকটিক্যাল ট্রেনিং নিশ্চিত করতে প্রতি ব্যাচে মাত্র ৩৫ জন নেওয়া হয়।",
      en: "Strict limit of 35 trainees per batch for intensive personalized hands-on guidance."
    }
  },
  {
    icon: GraduationCap,
    title: { en: "হাই-প্রোফাইল এক্সপার্ট মেন্টর", en: "High-Profile Expert Faculty" },
    desc: {
      en: "শিল্পকারখানার শীর্ষ প্রকৌশলী ও সিনিয়র বয়লার মাস্টারদের দ্বারা সহজ পাঠদান পদ্ধতি।",
      en: "Learn complex boiler systems effortlessly from top industry engineers and operators."
    }
  }
];

const trainers = [
  {
    name: { en: "প্রকৌশলী মোঃ মাজহারুল ইসলাম" },
    role: { en: "বি.এস.সি ইন ইলেক্ট্রিক্যাল ইঞ্জিনিয়ারিং(বুয়েট), সারটিফাইড এনার্জি অডিটর(সিইএ)" },
    exp: { en: "", en: "" },
    specialty: { en: "", en: "" }
  },
  {
    name: { en: "প্রকৌশলী মোঃ জালাল উদ্দিন" },
    role: { en: "বি.এস.সি ইন মেটালার্জিক্যাল ইঞ্জিনিয়ারিং(রুয়েট), সাবেক পরিচালক বাংলাদেশ শিল্প কারিগরি সহায়তা কেন্দ্র (বিটাক)"},
    exp: { en: "", en: "" },
    specialty: { en: "", en: "" }
  },
  {
    name: { en: "প্রকৌশলী লতিফ গাজী"},
    role: { en: "বি.এস.সি ইন কেমিক্যাল ইঞ্জিনিয়ারিং(ডুয়েট)" },
    exp: { en: "", en: "" },
    specialty: { en: "", en: "" }
  }
];

const faqs = [
  {
    q: { en: "কোর্সের মেয়াদ ও সময়সূচী কেমন?" },
    a: {
      en: "কোর্সটি ১ মাস মেয়াদী। মোট ১২০ ঘণ্টার মধ্যে ৬০ ঘণ্টা থিওরি এবং ৬০ ঘণ্টা প্র্যাকটিক্যাল ল্যাব ক্লাস থাকবে।"
    }
  },
  {
    q: { en: "কোর্সটি কোন লেভেলের জন্য প্রযোজ্য?" },
    a: {
      en: "কোর্সটি Grade-3 License পরীক্ষার জন্য সম্পূর্ণ প্রস্তুত করে গড়ে তোলার উপযোগী কারিকুলাম দ্বারা তৈরি।"
    }
  },
  {
    q: { en: "প্র্যাকটিক্যাল ট্রেনিং কীভাবে করানো হয়?" },
    a: {
      en: "আমাদের নিজস্ব ইন্ডাস্ট্রিয়াল বয়লার প্ল্যান্টে মাস্টার অপারেটরদের অধীনে সরাসরি হাতে-কলমে ট্রেনিং করানো হয়।"
    }
  },
  {
    q: { en: "ভর্তির নিয়ম কি?"},
    a: {
      en: "আমাদের মাত্র ৩৫টি আসন রয়েছে। সেপ্টেম্বর ২০২৬ সেশন থেকে ওয়েবসাইট থেকেই অনলাইন ফরম পূরণ করে আসন বুক করা যাবে।"
    }
  }
];

const Home = () => {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const [activeNotice, setActiveNotice] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((p) => (p + 1) % galleryImages.length),
      4500
    );
    return () => clearInterval(t);
  }, []);

  return (
    <main className="bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30 font-sans">
      
      {/* ================= URGENT ANNOUNCEMENT BAR ================= */}
      {/* Clear position to avoid overlap with navbar */}
      <div className="mt-24 bg-slate-900 text-white py-2.5 px-4 border-b border-[#00e1bf]/30 text-xs md:text-sm relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-[#00e1bf] text-[#0f172a] font-black px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider animate-pulse">
              ENROLLMENT OPEN
            </span>
            <p className="font-semibold text-gray-200">
              {lang === "en"
                ? "ভর্তি চলছে! সিট সংখ্যা সীমিত (মাত্র ৩৫টি)"
                : "Strictly 35 Seats Only"}
            </p>
          </div>
          <Link
            to="/admission"
            className="inline-flex items-center gap-1 text-[#00e1bf] font-bold hover:underline shrink-0 text-xs"
          >
            {lang === "en" ? "আসন বুক করুন" : "Book Your Seat"} <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center pt-8 lg:pt-12 pb-16 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,225,191,0.08),_transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Batch Status Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00e1bf]/10 text-[#00b89c] px-4 py-2 rounded-2xl text-xs md:text-sm font-bold mb-6 border border-[#00e1bf]/30">
              <Sparkles size={16} className="animate-spin" style={{ animationDuration: "6s" }} />
              <span>
                {lang === "en"
                  ? "প্রতি ব্যাচই সফলতার সাথে শেষ করা হয়"
                  : "Completed Successfully"}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-[1.15] text-[#0f172a] tracking-tight">
              {lang === "en" ? (
                <>
                  প্রফেশনাল বয়লার <br />
                  <span className="bg-gradient-to-r from-[#00b89c] to-[#00e1bf] bg-clip-text text-transparent">
                    অপারেশন অ্যান্ড মেইনটেন্যান্স
                  </span>
                </>
              ) : (
                <>
                  Professional Boiler <br />
                  <span className="bg-gradient-to-r from-[#00b89c] to-[#00e1bf] bg-clip-text text-transparent">
                    Operation & Maintenance
                  </span>
                </>
              )}
            </h1>

            {/* Course Specification Summary Cards */}
            <div className="grid grid-cols-3 gap-3 mb-8 p-4 bg-[#f8fafc] rounded-2xl border border-gray-100">
              <div className="space-y-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Duration</span>
                <p className="text-xs md:text-sm font-black text-[#0f172a] flex items-center gap-1.5">
                  <Clock size={15} className="text-[#00b89c]" /> 1 Month
                </p>
              </div>
              <div className="space-y-1 border-x border-gray-200 px-3">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Total Hours</span>
                <p className="text-xs md:text-sm font-black text-[#0f172a] flex items-center gap-1.5">
                  <Layers size={15} className="text-[#00b89c]" /> 120 Hours
                </p>
              </div>
              <div className="space-y-1 pl-1">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Target Level</span>
                <p className="text-xs md:text-sm font-black text-[#0f172a] flex items-center gap-1.5">
                  <Award size={15} className="text-[#00b89c]" /> Grade-3
                </p>
              </div>
            </div>

            <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-2xl font-normal">
              {lang === "en"
                ? "আমাদের নিজস্ব বয়লার প্ল্যান্টে ৬০ ঘণ্টা থিওরি ও ৬০ ঘণ্টা সরাসরি প্র্যাকটিক্যাল ল্যাবের মাধ্যমে শিল্পকারখানার বয়লার চালনা ও মেইনটেন্যান্সে নিজেকে দক্ষ করে তুলুন।"
                : "Equip yourself with 60 hours theory & 60 hours hands-on boiler practicals on our in-house industrial setup led by expert operators."}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/admission"
                className="group inline-flex items-center gap-2.5 bg-[#00b89c] hover:bg-[#00a38a] text-white px-7 py-4 rounded-2xl font-black text-sm md:text-base transition-all shadow-lg shadow-[#00b89c]/25 hover:scale-[1.02]"
              >
                {lang === "en" ? "ভর্তি আবেদন করুন" : "Apply"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => setShowSyllabusModal(true)}
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-[#00e1bf] text-[#0f172a] px-6 py-4 rounded-2xl font-bold text-sm transition-all"
              >
                <FileText size={18} className="text-[#00b89c]" />
                {lang === "en" ? "সিলেবাস স্ট্রাকচার" : "View Syllabus Structure"}
              </button>
            </div>
          </motion.div>

          {/* Hero Image Showcase */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-[440px] bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={galleryImages[index]}
                  alt="Practical Boiler Facility"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block bg-[#00e1bf] text-[#0f172a] px-3 py-0.5 rounded text-[10px] font-black uppercase mb-2">
                  In-House Boiler Plant
                </span>
                <p className="text-sm font-bold text-gray-100">
                  {lang === "en"
                    ? "সরাসরি ইন-হাউস বয়লার প্র্যাকটিক্যাল ল্যাব"
                    : "Direct Hands-on Experience at Practical Station"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= COURSE DETAILS & BREAKDOWN SECTION ================= */}
      <section className="py-16 bg-[#f8fafc] border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[#00b89c] font-black text-xs uppercase tracking-widest bg-[#00b89c]/10 px-4 py-1 rounded-full">
                COURSE OVERVIEW
              </span>
              <h2 className="text-3xl font-black text-[#0f172a] mt-3">
                {lang === "en" ? "কোর্স স্ট্রাকচার ও ঘণ্টা বন্টন" : "Course Structure & Hour Breakdown"}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-100">
                <div className="w-12 h-12 bg-[#00b89c]/10 text-[#00b89c] rounded-xl flex items-center justify-center mx-auto mb-4 font-black">
                  <BookOpen size={24} />
                </div>
                <h3 className="font-black text-2xl text-[#0f172a] mb-1">60 Hours</h3>
                <p className="text-xs font-bold text-gray-500 uppercase">Theory Classes (তত্ত্বীয়)</p>
                <p className="text-xs text-gray-500 mt-2">Boiler Act 2022, Rules 2025, Safety & Firing Dynamics</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-100">
                <div className="w-12 h-12 bg-[#00e1bf]/20 text-[#00b89c] rounded-xl flex items-center justify-center mx-auto mb-4 font-black">
                  <Wrench size={24} />
                </div>
                <h3 className="font-black text-2xl text-[#0f172a] mb-1">60 Hours</h3>
                <p className="text-xs font-bold text-gray-500 uppercase">Practical Lab (ব্যবহারিক)</p>
                <p className="text-xs text-gray-500 mt-2">In-house Boiler Operations, Valve Test, Water Treatment</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8fafc] border border-gray-100">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 font-black">
                  <Award size={24} />
                </div>
                <h3 className="font-black text-2xl text-[#0f172a] mb-1">Grade-3</h3>
                <p className="text-xs font-bold text-gray-500 uppercase">Target Level (লাইসেন্স পরীক্ষা)</p>
                <p className="text-xs text-gray-500 mt-2">Formative & Summative assessment for examination readiness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE HIGHLIGHTS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00b89c] font-black text-xs uppercase tracking-widest bg-[#00b89c]/10 px-4 py-1.5 rounded-full">
              WHY TRAIN WITH US
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mt-3">
              {lang === "en" ? "আমাদের ইনস্টিটিউটের প্রধান সুবিধাসমূহ" : "Key Highlights of Our Institute"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] p-7 rounded-3xl border border-gray-100 hover:border-[#00e1bf] hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#00e1bf]/15 text-[#00b89c] rounded-2xl flex items-center justify-center mb-6">
                    <item.icon size={26} />
                  </div>
                  <h3 className="font-black text-lg text-[#0f172a] mb-2 leading-snug">
                    {item.title[lang]}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                    {item.desc[lang]}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-bold text-[#00b89c]">
                  <span>Quality Assured</span>
                  <Check size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELEVANT NOTICE BOARD ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <span className="text-[#00b89c] font-black text-xs uppercase tracking-widest">
              OFFICIAL UPDATES
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0f172a] flex items-center gap-3 mt-1">
              <span className="w-9 h-9 bg-[#00b89c]/10 text-[#00b89c] rounded-xl flex items-center justify-center">
                <Bell size={20} />
              </span>
              {texts.noticeBoard[lang]}
            </h2>
          </div>
        </div>

        <div className="grid gap-4">
          {noticesData.map((notice) => (
            <div
              key={notice.id}
              onClick={() => setActiveNotice(notice)}
              className="bg-white p-5 rounded-2xl border-l-4 border-l-[#00b89c] border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  {notice.date}
                </span>
                <p className="font-bold text-[#0f172a] text-sm md:text-base hover:text-[#00b89c] transition-colors">
                  {notice.title}
                </p>
              </div>
              <ChevronRight size={20} className="text-gray-400 shrink-0" />
            </div>
          ))}
        </div>

        {/* Notice Modal */}
        <AnimatePresence>
          {activeNotice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-[#0f172a]/70 backdrop-blur-sm flex items-center justify-center px-4"
            >
              <div className="relative bg-white rounded-3xl p-8 max-w-xl w-full shadow-2xl border border-gray-100">
                <button
                  onClick={() => setActiveNotice(null)}
                  className="absolute top-6 right-6 w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500"
                >
                  <X size={18} />
                </button>
                <span className="text-xs font-bold text-[#00b89c] bg-[#00b89c]/10 px-3 py-1 rounded-full inline-block mb-3">
                  {activeNotice.date}
                </span>
                <h3 className="text-xl font-black mb-3 text-[#0f172a]">
                  {activeNotice.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {activeNotice.details}
                </p>
                <button
                  onClick={() => setActiveNotice(null)}
                  className="bg-[#00b89c] text-white font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#00a38a]"
                >
                  {lang === "en" ? "বন্ধ করুন" : "Close"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ================= EXPERT TRAINERS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#00b89c] font-black text-xs uppercase tracking-widest bg-[#00b89c]/10 px-4 py-1.5 rounded-full">
              INSTRUCTORS
            </span>
            <h2 className="text-3xl font-black text-[#0f172a] mt-3">
              {lang === "en" ? "অভিজ্ঞ ইনস্ট্রাক্টরবৃন্দ" : "Meet Our Mentors"}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer, i) => (
              <div
                key={i}
                className="bg-[#f8fafc] rounded-3xl p-7 border border-gray-100 text-center flex flex-col items-center justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00b89c] to-[#00e1bf] rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-4 shadow-md">
                    <UserCheck size={30} />
                  </div>
                  <h3 className="font-black text-lg text-[#0f172a] mb-1">
                    {trainer.name[lang]}
                  </h3>
                  <p className="text-[#00b89c] font-bold text-xs mb-2">
                    {trainer.role[lang]}
                  </p>
                  <p className="text-[11px] text-gray-500 font-medium mb-4 bg-white py-1 px-3 rounded-full border border-gray-200/60 inline-block">
                    {trainer.exp[lang]}
                  </p>
                </div>
                <div className="w-full pt-3 border-t border-gray-200/60">
                  <p className="text-xs font-bold text-slate-700">{trainer.specialty[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#00b89c] font-black text-xs uppercase tracking-widest bg-[#00b89c]/10 px-4 py-1.5 rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl font-black text-[#0f172a] mt-3">
              {lang === "en" ? "Frequently Asked Questions" : "সাধারণ প্রশ্নাবলী"}
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all ${
                  openFaq === i ? "bg-white border-[#00b89c] shadow-sm" : "bg-white border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left outline-none"
                >
                  <span className="font-bold text-base text-[#0f172a]">
                    {faq.q[lang]}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform text-gray-500 ${openFaq === i ? "rotate-180 text-[#00b89c]" : ""}`}
                  />
                </button>

                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100 pt-3">
                    {faq.a[lang]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SYLLABUS MODAL (RELEVANT MODAL) ================= */}
      <AnimatePresence>
        {showSyllabusModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setShowSyllabusModal(false)}
                className="absolute top-6 right-6 w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold text-[#00b89c] bg-[#00b89c]/10 px-3 py-1 rounded-full uppercase">
                  Grade-3 License Syllabus Structure
                </span>
                <h3 className="text-2xl font-black text-[#0f172a] mt-2">
                  Boiler Operation & Maintenance Curriculum
                </h3>
                <p className="text-xs text-gray-500">Total Hours: 120 Hours (60 Hours Theory + 60 Hours Practical)</p>
              </div>

              <div className="space-y-4 mb-6">
                {syllabusModules.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#f8fafc] border border-gray-100">
                    <h4 className="font-bold text-sm text-[#00b89c] mb-1">{item.module}</h4>
                    <p className="text-xs text-gray-600">{item.topics}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400">Boiler Act 2022 & Boiler Rules 2025 Approved Standard</p>
                <button
                  onClick={() => setShowSyllabusModal(false)}
                  className="bg-[#0f172a] text-white px-5 py-2.5 rounded-xl font-bold text-xs"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;