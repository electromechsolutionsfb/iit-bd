import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gauge,
  ShieldCheck,
  Wrench,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  X,
  Clock,
  Flame,
  Users,
  Calendar,
  UserCheck,
  BookOpen
} from "lucide-react";

import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";
import AdmissionFormModal from "/src/Modal/AdmissionFormModal";

// Single Master Course Structure & Syllabus
const singleCourseData = {
  title: "Industrial Boiler Operation & Maintenance Course",
  subTitle: "১টি সমন্বিত প্র্যাকটিক্যাল কোর্স",
  desc: "আমাদের নিজস্ব ইন-হাউস বয়লারে অভিজ্ঞ অপারেটরদের প্রত্যক্ষ নজরদারিতে হাতে-কলমে প্র্যাকটিক্যাল ট্রেনিং। হাই-প্রোফাইল ইঞ্জিনিয়ার ও অভিজ্ঞ শিক্ষকগণ সহজ ও সাবলীল ভাষায় সমস্ত থিওরি ও প্র্যাকটিক্যাল পাঠদান করেন।",
  duration: "3 Months Intensive Practical",
  syllabus: [
    "Introduction to Industrial Boilers & Safety Protocols",
    "Boiler Operation, Control & Pressure Management",
    "Water Treatment, Quality Control & Chemical Dosing",
    "Boiler Maintenance, Valve Inspection & Troubleshooting",
    "SOP (Standard Operating Procedure) & Emergency Handling",
    "Live Boiler Operating Practice with Expert Operators"
  ]
};

const methodologyList = [
  "নিজস্ব বয়লারে ১০০% লাইভ প্র্যাকটিক্যাল সেশন",
  "দক্ষ ও অভিজ্ঞ বয়লার অপারেটরদের রিয়েল-টাইম সাপোর্ট",
  "হাই-প্রোফাইল ইঞ্জিনিয়ারদের সহজ ও সাবলীল পাঠদান",
  "প্রতি ব্যাচে সর্বোচ্চ ৩৫ জন শিক্ষার্থী (সীমিত সিট)",
];

const Training = () => {
  const { lang } = useLanguage();
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <main className="min-h-screen pt-32 bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30 transition-colors">

      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-28">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00b89c]/10 rounded-full blur-[120px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Professional Excellence</span>
          </div> */}

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            ইন্ডাস্ট্রিয়াল বয়লার ট্রেনিং কোর্স<span className="text-[#00b89c]">.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            প্রত্যেক ব্যাচই সফলভাবে সম্পন্ন এবং নতুন ব্যাচে ভর্তি চলছে হওয়ার পর, এখন সেপ্টেম্বর ২০২৬-এর ভর্তি চলছে। আমাদের একমাত্র বিশেষায়িত কোর্সে নিজস্ব বয়লারে হাতে-কলমে প্র্যাকটিক্যাল ট্রেনিং দেওয়া হয়।
          </p>
        </motion.div>
      </section>

      {/* ===== BATCH HIGHLIGHTS / STATS ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Flame size={24} />, title: "১ম ব্যাচ", desc: "সফলভাবে সম্পন্ন" },
            { icon: <Calendar size={24} />, title: "২য় ব্যাচ", desc: "সেপ্টেম্বর ভর্তি চলছে" },
            { icon: <Users size={24} />, title: "৩৫ জন", desc: "সীমিত সিট (প্রতি ব্যাচ)" },
            { icon: <UserCheck size={24} />, title: "১০০%", desc: "প্র্যাকটিক্যাল ট্রেনিং" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-[#00b89c]/10 text-[#00b89c] flex items-center justify-center">
                {stat.icon}
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-[#0f172a]">{stat.title}</h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SINGLE MASTER COURSE SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
           <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#00b89c]">Flagship Program</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mt-2">
                আমাদের একমাত্র বিশেষায়িত কোর্স
              </h2>
           </div>
           <div className="hidden md:block h-[2px] flex-1 bg-gray-100 mx-10" />
           <div className="bg-[#00b89c]/10 text-[#00b89c] px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest">
             Batch 2 Enrolling
           </div>
        </div>

        {/* Course Main Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 rounded-[3rem] p-8 md:p-14 shadow-xl hover:shadow-2xl hover:shadow-[#00b89c]/10 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-[#00b89c]" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#00b89c]/10 text-[#00b89c]">
                <Gauge size={32} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-[#0f172a]">
                {singleCourseData.title}
              </h3>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                {singleCourseData.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-black text-gray-500 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100">
                  <Clock size={16} className="text-[#00b89c]" /> {singleCourseData.duration}
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-gray-500 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100">
                  <Award size={16} className="text-[#00b89c]" /> Professional Certification
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#f8fafc] border border-gray-100 rounded-[2.5rem] p-8 space-y-6">
              <h4 className="text-lg font-black text-[#0f172a] flex items-center gap-2">
                <BookOpen size={20} className="text-[#00b89c]" /> কোর্স মডিউল ও সিলেবাস:
              </h4>

              <ul className="space-y-3">
                {singleCourseData.syllabus.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-bold text-gray-700">
                    <CheckCircle2 size={18} className="text-[#00b89c] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsAdmissionOpen(true)}
                  className="flex-1 bg-[#00b89c] text-white py-4 px-6 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-[#0f172a] transition-all shadow-lg shadow-[#00b89c]/20"
                >
                  ভর্তি হন <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => setSelectedCourse({ ...singleCourseData, icon: <Gauge size={32} /> })}
                  className="px-6 py-4 border border-gray-200 rounded-2xl font-black text-[#0f172a] hover:bg-white transition-all text-sm"
                >
                  বিস্তারিত দেখুন
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== METHODOLOGY WITH GLASSMOPHISM ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-[#0f172a] rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
           <div className="absolute inset-0 opacity-20">
              <img src="https://i.ibb.co.com/kVjGXkQs/12.jpg" alt="Industry" className="w-full h-full object-cover" />
           </div>
           
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                 <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                   Our Training <br /> <span className="text-[#00b89c]">Methodology.</span>
                 </h2>
                 <p className="text-gray-400 text-lg leading-relaxed">
                   জটিল থিওরিকে দূরে রেখে হাই-প্রোফাইল শিক্ষক ও অভিজ্ঞ অপারেটরদের সরাসরি উপস্থিতিতে নিজস্ব বয়লারে শেখানো হয় সহজ পদ্ধতিতে।
                 </p>
              </div>

              <div className="grid gap-4">
                {methodologyList.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 text-white group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00b89c]/20 flex items-center justify-center text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* ===== CERTIFICATION SECTION ===== */}
      <section className="max-w-4xl mx-auto px-6 mb-32 text-center">
        <div className="inline-flex p-5 bg-[#00b89c]/10 rounded-[2rem] text-[#00b89c] mb-8 shadow-sm">
          <Award size={48} strokeWidth={1.5} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#0f172a]">
          Industry Recognized Certification
        </h2>
        <p className="text-gray-500 text-xl leading-relaxed font-medium">
          কোর্স শেষে সফলভাবে প্র্যাকটিক্যাল মূল্যায়ন উত্তীর্ণদের প্রদান করা হবে সরকারি ও শিল্পখাতে গ্রহণযোগ্য ভেরিফাইড সার্টিফিকেট।
        </p>
      </section>

      {/* ===== COMPACT CTA WITH IMAGE ===== */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-[3.5rem] overflow-hidden min-h-[450px] flex items-center justify-center group shadow-2xl">
            <div className="absolute inset-0">
               <img src="https://i.ibb.co.com/sJM8ygRn/09.jpg" alt="CTA" className="w-full h-full object-cover opacity-30" />
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#0f172a] leading-tight">
                ২য় ব্যাচে আপনার সিট বুক করুন
              </h2>
              <p className="mb-10 text-gray-500 text-lg md:text-xl font-medium">
                সেপ্টেম্বর ২০২৬ থেকে ক্লাস শুরু হতে যাচ্ছে। প্রতি ব্যাচে আসন সংখ্যা মাত্র ৩৫টি!
              </p>
              <button
                onClick={() => setIsAdmissionOpen(true)}
                className="bg-[#00b89c] text-white px-12 py-5 rounded-[2rem] font-black inline-flex items-center gap-3 hover:bg-[#0f172a] hover:scale-105 transition-all shadow-xl shadow-[#00b89c]/30 active:scale-95"
              >
                Apply for Admission <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Course Details Modal ===== */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseDetailsModal 
            course={selectedCourse} 
            onClose={() => setSelectedCourse(null)} 
            onApply={() => {
              setSelectedCourse(null);
              setIsAdmissionOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* ===== Shared Admission Modal ===== */}
      <AdmissionFormModal
        open={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
      />
    </main>
  );
};

/* ================= COURSE DETAILS MODAL COMPONENT ================= */
const CourseDetailsModal = ({ course, onClose, onApply }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] bg-[#0f172a]/70 backdrop-blur-md flex items-center justify-center px-6"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }} 
        animate={{ scale: 1, y: 0 }} 
        exit={{ scale: 0.9, y: 20 }}
        className="relative bg-white rounded-[3rem] p-8 md:p-14 max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b89c]/5 rounded-bl-full" />
        <button onClick={onClose} className="absolute top-8 right-8 p-2 bg-gray-50 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all z-10">
          <X size={20} />
        </button>

        <div className="relative z-10">
          <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-[#00b89c]/10 text-[#00b89c] shadow-sm">
            {course.icon}
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-6 leading-tight">{course.title}</h3>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-xl">
              <Clock size={16} className="text-[#00b89c]" /> {course.duration}
            </div>
            <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-xl">
              <Award size={16} className="text-[#00b89c]" /> Verified Certificate
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-3">
               <div className="h-1 w-8 bg-[#00b89c] rounded-full" />
               <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#00b89c]">Course Overview</h4>
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              {course.desc}
            </p>
          </div>

          {course.syllabus && (
            <div className="space-y-4 mb-10 bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
              <h4 className="text-sm font-black uppercase tracking-wider text-[#0f172a]">Detailed Syllabus:</h4>
              <ul className="space-y-2">
                {course.syllabus.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-600">
                    <CheckCircle2 size={16} className="text-[#00b89c] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
            <button 
              onClick={onApply}
              className="flex-1 bg-[#00b89c] text-white py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#0f172a] transition-all shadow-xl shadow-[#00b89c]/30"
            >
              Apply for Admission <ArrowRight size={20} />
            </button>
            <button 
              onClick={onClose}
              className="px-8 py-4 border border-gray-100 rounded-2xl font-black text-[#0f172a] hover:bg-gray-50 transition-all text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Training;