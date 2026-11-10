import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  X,
  User,
  Phone,
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

/* ===== Course & License Career Features ===== */
const careerFeatures = [
  {
    id: 1,
    title: { 
      en: "Government Boiler License Assistance", 
      bn: "সরকারি বয়লার লাইসেন্স প্রাপ্তিতে শতভাগ সহায়তা" 
    },
    subtitle: { 
      en: "Complete guidance for Govt Boiler Board Examination", 
      bn: "সরকারি লাইসেন্স পরীক্ষার যাবতীয় প্রস্তুতি, ফরম ফিলাপ ও সার্বিক সহযোগিতা।" 
    },
    details: {
      en: [
        "Special exam preparation classes based on Government Boiler Board guidelines.",
        "Complete assistance in document verification & application process.",
        "Mock exams and practical interview sessions to pass on the first attempt."
      ],
      bn: [
        "সরকারি বয়লার বোর্ডের সিলেবাস অনুযায়ী বিশেষ পরীক্ষার প্রস্তুতিমূলক ক্লাস।",
        "পরীক্ষার আবেদন, কাগজপত্র যাচাই ও সাবমিশনে প্রয়োজনীয় সকল সাপোর্ট।",
        "প্রথমবারেই লাইসেন্স অর্জনের জন্য প্র্যাকটিক্যাল মক পরীক্ষা ও ইন্টারভিউ প্রস্তুতি।"
      ]
    },
  },
  {
    id: 2,
    title: { 
      en: "Exclusive Single Comprehensive Boiler Course", 
      bn: "১টি মাত্র সমন্বিত আধুনিক বয়লার ট্রেনিং কোর্স" 
    },
    subtitle: { 
      en: "Batch 2 (September 2026) - Limited 35 Seats", 
      bn: "১ম ব্যাচ সফলভাবে সম্পন্ন। ভর্তি চলছে (সেপ্টেম্বর ২০২৬, মাত্র ৩৫ সিট)।" 
    },
    details: {
      en: [
        "100% practical training on real industrial boiler systems.",
        "Covers high-pressure boiler operations, maintenance, & safety SOPs.",
        "In-depth knowledge that builds high demand in the job market."
      ],
      bn: [
        "বাস্তব শিল্পকারখানার বয়লার সিস্টেমে শতভাগ হ্যান্ডস-অন প্র্যাকটিক্যাল ট্রেনিং।",
        "হাই-প্রেশার বয়লার অপারেশন, মেইনটেন্যান্স ও ইন্ডাস্ট্রিয়াল সেফটি ট্রেনিং।",
        "এমনভাবে প্রস্তুত করা হয় যেন প্রার্থীরা যেকোনো কারখানায় কাজ করতে প্রস্তুত থাকে।"
      ]
    },
  },
  {
    id: 3,
    title: { 
      en: "High Job Prospects with Govt License", 
      bn: "লাইসেন্স প্রাপ্তির মাধ্যমে সহজ ও নিশ্চিত চাকরির সুযোগ" 
    },
    subtitle: { 
      en: "Become a high-demand professional across top industries", 
      bn: "সরকারি লাইসেন্স অর্জন করলে দেশে-বিদেশে চাকরির দ্বারে অগ্রাধিকার।" 
    },
    details: {
      en: [
        "A valid Government Boiler License makes job recruitment extremely smooth.",
        "Top garments, pharmaceuticals, & manufacturing plants prioritize certified operators.",
        "Complete career counseling and resume guidance after course completion."
      ],
      bn: [
        "সরকারি লাইসেন্স থাকলে যেকোনো বড় শিল্পকারখানায় সরাসরি চাকরি পাওয়া অনেক সহজ হয়।",
        "টেক্সটাইল, ফার্মাসিউটিক্যালস ও ম্যানুফ্যাকচারিং প্ল্যান্টে লাইসেন্সধারীদের অগ্রাধিকার।",
        "কোর্স শেষে ভাইভা গাইডলাইন, কভার লেটার ও সিভি তৈরিতে বিশেষ পরামর্শ।"
      ]
    },
  },
];

const Job = () => {
  const { lang } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <main className="min-h-screen pt-32 bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30 transition-colors">

      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00b89c]/10 rounded-full blur-[120px] -z-10" />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              {lang === "bn" ? "ক্যারিয়ার ও ট্রেনিং সাপোর্ট" : "Career & Training Support"}
            </span>
          </div> */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            {lang === "bn" ? "প্রশিক্ষণ ও সরকারি লাইসেন্স গাইড" : "Training & Govt License Guide"}
            <span className="text-[#00b89c]">.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            {lang === "bn" 
              ? "আমরা সরাসরি চাকরি প্রদান করি না; তবে আমাদের একমাত্র সমন্বিত বয়লার কোর্স সম্পন্ন করলে আপনি সহজেই সরকারি বয়লার লাইসেন্স পাবেন। পরীক্ষার যাবতীয় প্রস্তুতি ও সহযোগিতা আমরা করব, যা আপনাকে সহজে ভালো চাকরি পেতে সাহায্য করবে।" 
              : "We don't recruit directly; our single comprehensive boiler course helps you easily earn a Government Boiler License. We provide full support for the Govt exam, ensuring easy job placements."}
          </p>
        </motion.div>
      </section>

      {/* ===== FEATURE LIST ===== */}
      <section className="max-w-6xl mx-auto px-6 mb-32 space-y-6">
        {careerFeatures.map((feature, i) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-2xl hover:shadow-[#00b89c]/10 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00b89c] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-black mb-3 flex items-center gap-3 text-[#0f172a]">
                <div className="w-12 h-12 rounded-2xl bg-[#f8fafc] text-[#00b89c] flex items-center justify-center shadow-sm shrink-0">
                   {feature.id === 1 ? <Award size={24} /> : feature.id === 2 ? <BookOpen size={24} /> : <GraduationCap size={24} />}
                </div>
                {feature.title[lang]}
              </h3>
              <p className="text-gray-500 font-medium text-base ml-15">
                {feature.subtitle[lang]}
              </p>
            </div>

            <button
              onClick={() => setActiveFeature(feature)}
              className="bg-[#0f172a] text-white font-black px-8 py-5 rounded-2xl inline-flex items-center justify-center gap-3 hover:bg-[#00b89c] transition-all shadow-xl shadow-gray-200 hover:shadow-[#00b89c]/30 active:scale-95 group/btn shrink-0"
            >
              {lang === "bn" ? "বিস্তারিত দেখুন" : "View Details"} 
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </section>

      {/* ===== WHY GOVT LICENSE MATTERS ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img src="https://i.ibb.co.com/kVjGXkQs/12.jpg" alt="IIT Career" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-white/90 backdrop-blur-[3px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>

          <div className="relative z-10 p-10 md:p-20 w-full">
            <h2 className="text-4xl md:text-6xl font-black mb-14 text-[#0f172a] leading-tight">
              {lang === "bn" ? "আমাদের সাপোর্ট ও লাইসেন্স সুবিধা" : "Our Course & License Benefits"}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {[
                lang === "bn" ? "১টি মাত্র সমন্বিত বয়লার প্রশিক্ষণ কোর্স" : "Single Comprehensive Boiler Training Course",
                lang === "bn" ? "সরকারি বয়লার পরীক্ষার যাবতীয় ফর্মালিটিজে সহায়তা" : "Complete Support for Govt Boiler Exam & Formality",
                lang === "bn" ? "সরকারি লাইসেন্স অর্জনের মাধ্যমে সহজ চাকরির সুযোগ" : "Easy Job Opportunities with Govt License",
                lang === "bn" ? "সেপ্টেম্বর ২০২৬-এর ২য় ব্যাচে সীমিত ৩৫ সিট" : "Limited 35 Seats in September 2026 Batch"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-white p-6 rounded-[2rem] shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00b89c]/10 flex items-center justify-center text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-[#0f172a]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DETAILS MODAL ===== */}
      <AnimatePresence>
        {activeFeature && (
          <Modal
            title={activeFeature.title[lang]}
            onClose={() => setActiveFeature(null)}
          >
            <div className="space-y-4 mb-8">
              <h4 className="font-black text-sm uppercase tracking-widest text-[#00b89c]">
                {lang === "bn" ? "কী কী সুবিধা পাবেন:" : "Key Benefits & Features:"}
              </h4>
              <div className="space-y-4">
                {activeFeature.details[lang].map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-700 font-medium text-base">
                    <ShieldCheck size={20} className="text-[#00b89c] mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-semibold mb-6">
                * {lang === "bn" ? "আমাদের সেপ্টেম্বর ২০২৬-এর ২য় ব্যাচে মাত্র ৩৫টি আসন খালি রয়েছে।" : "Limited 35 seats available for September 2026 Batch 2."}
              </p>
              <button
                onClick={() => setActiveFeature(null)}
                className="w-full bg-[#00b89c] text-white font-black py-4 rounded-2xl hover:bg-[#0f172a] transition-all shadow-xl shadow-[#00b89c]/20 active:scale-95 flex items-center justify-center gap-2"
              >
                {lang === "bn" ? "ঠিক আছে" : "Got It"}
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </main>
  );
};

/* ===== Reusable Components ===== */

const Modal = ({ title, children, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[999] bg-[#0f172a]/80 backdrop-blur-md flex items-center justify-center px-4"
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="relative bg-white rounded-[3.5rem] p-10 md:p-14 max-w-xl w-full shadow-2xl overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b89c]/5 rounded-bl-full" />
      <button
        onClick={onClose}
        className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
      >
        <X size={20} />
      </button>
      <h3 className="text-2xl md:text-3xl font-black mb-8 text-[#0f172a] leading-tight pr-8">{title}</h3>
      {children}
    </motion.div>
  </motion.div>
);

export default Job;