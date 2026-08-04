import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gauge,
  ShieldCheck,
  Wrench,
  Award,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ArrowRight,
  X,
  Clock
} from "lucide-react";

import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";
import AdmissionFormModal from "/src/Modal/AdmissionFormModal";

const Training = () => {
  const { lang } = useLanguage();
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // আইকন ম্যাপ করার ফাংশন
  const getIcon = (index) => {
    const icons = [<Gauge size={30} />, <Wrench size={30} />, <ShieldCheck size={30} />];
    return icons[index] || <BookOpen size={30} />;
  };

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
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Professional Excellence</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            {texts.trainingTitle[lang]}<span className="text-[#00b89c]">.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            {texts.trainingSubtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* ===== PROGRAMS GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
           <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">
             {texts.trainingProgramsTitle[lang]}
           </h2>
           <div className="hidden md:block h-[2px] flex-1 bg-gray-100 mx-10" />
           <div className="bg-[#00b89c]/10 text-[#00b89c] px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest">
             Top Rated Courses
           </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {texts.trainingPrograms[lang].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 hover:shadow-2xl hover:shadow-[#00b89c]/10 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#00b89c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-[#f8fafc] text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-50">
                {getIcon(i)}
              </div>

              <h3 className="text-2xl font-black mb-4 text-[#0f172a]">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8 line-clamp-3">
                {item.desc}
              </p>

              <button 
                onClick={() => setSelectedCourse({ ...item, icon: getIcon(i) })}
                className="flex items-center gap-2 text-[#00b89c] font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all"
              >
                Course Details <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
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
                    We combine theoretical knowledge with extensive hands-on practice in our modern labs.
                 </p>
              </div>

              <div className="grid gap-4">
                {texts.trainingMethodology[lang].map((item, i) => (
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
          {texts.trainingCertificationTitle[lang]}
        </h2>
        <p className="text-gray-500 text-xl leading-relaxed font-medium">
          {texts.trainingCertificationDesc[lang]}
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
                {texts.trainingCTATitle[lang]}
              </h2>
              <p className="mb-10 text-gray-500 text-lg md:text-xl font-medium">
                {texts.trainingCTASubtitle[lang]}
              </p>
              <button
                onClick={() => setIsAdmissionOpen(true)}
                className="bg-[#00b89c] text-white px-12 py-5 rounded-[2rem] font-black inline-flex items-center gap-3 hover:bg-[#0f172a] hover:scale-105 transition-all shadow-xl shadow-[#00b89c]/30 active:scale-95"
              >
                {texts.applyAdmission[lang]} <ArrowRight size={20} />
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
            lang={lang}
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
const CourseDetailsModal = ({ course, onClose, lang, onApply }) => {
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
        className="relative bg-white rounded-[3rem] p-8 md:p-14 max-w-2xl w-full shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b89c]/5 rounded-bl-full" />
        <button onClick={onClose} className="absolute top-8 right-8 p-2 bg-gray-50 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all z-10">
          <X size={20} />
        </button>

        <div className="relative z-10">
          <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-[#00b89c]/10 text-[#00b89c] shadow-sm">
            {course.icon}
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-6 leading-tight">{course.title}</h3>
          
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-xl">
              <Clock size={16} className="text-[#00b89c]" /> Training Duration Included
            </div>
            <div className="flex items-center gap-2 text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-xl">
              <Award size={16} className="text-[#00b89c]" /> Verified Certificate
            </div>
          </div>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-3">
               <div className="h-1 w-8 bg-[#00b89c] rounded-full" />
               <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#00b89c]">Course Overview</h4>
            </div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium italic">
              "{course.desc}"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
            <button 
              onClick={onApply}
              className="flex-1 bg-[#00b89c] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#0f172a] transition-all shadow-xl shadow-[#00b89c]/30"
            >
              Apply for Admission <ArrowRight size={20} />
            </button>
            <button 
              onClick={onClose}
              className="px-10 py-5 border border-gray-100 rounded-2xl font-black text-[#0f172a] hover:bg-gray-50 transition-all"
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