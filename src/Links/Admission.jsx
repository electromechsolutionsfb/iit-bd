import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FileText,
  PhoneCall,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";
import AdmissionFormModal from "/src/Modal/AdmissionFormModal";

const Admission = () => {
  const { lang } = useLanguage();
  const [openForm, setOpenForm] = useState(false);

  return (
    <main className="min-h-screen pt-32 bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30 transition-colors">

      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00b89c]/10 rounded-full blur-[120px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Academic Enrollment 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            {texts.admissionTitle[lang]}<span className="text-[#00b89c]">.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            {texts.admissionSubtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* ===== STEP-BY-STEP ADMISSION PROCESS ===== */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-32">
        <StepCard
          icon={<FileText size={28} />}
          number="01"
          title={texts.admissionStep1Title[lang]}
          desc={texts.admissionStep1Desc[lang]}
          onClick={() => setOpenForm(true)}
        />
        <StepCard
          icon={<PhoneCall size={28} />}
          number="02"
          title={texts.admissionStep2Title[lang]}
          desc={texts.admissionStep2Desc[lang]}
        />
        <StepCard
          icon={<ClipboardCheck size={28} />}
          number="03"
          title={texts.admissionStep3Title[lang]}
          desc={texts.admissionStep3Desc[lang]}
        />
      </section>

      {/* ===== REQUIRED DOCUMENTS (INDUSTRIAL THEME) ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="relative rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,184,156,0.15)] flex items-center">
          
          {/* Background Industry Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.ibb.co.com/sJM8ygRn/09.jpg" 
              alt="Industry Docs" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[3px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
          </div>

          <div className="relative z-10 p-10 md:p-20 w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-6">
                <div className="h-1.5 w-20 bg-[#00b89c] rounded-full" />
                <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-tight">
                  {texts.requiredDocumentsTitle[lang]}
                </h2>
                <p className="text-gray-500 text-lg font-medium">
                  Ensure you have all these documents ready before visiting the campus for final verification.
                </p>
              </div>

              <div className="lg:w-1/2 grid sm:grid-cols-1 gap-4">
                {texts.requiredDocumentsList[lang].map((doc, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 bg-white/60 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-sm group transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00b89c]/10 flex items-center justify-center text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-[#0f172a]">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION (NO BLACK - INDUSTRY IMAGE) ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl min-h-[400px] flex items-center justify-center group">
          
          {/* Background Industry Image with Professional Overlay */}
          <div className="absolute inset-0 z-0 transition-transform duration-[2000ms] group-hover:scale-105">
            <img 
              src="https://i.ibb.co.com/kVjGXkQs/12.jpg" 
              alt="CTA Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#00b89c]/10 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/40" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
                {lang === "bn" ? "ভর্তি শুরু করতে প্রস্তুত?" : "Ready to Start?"}
              </h2>
              <p className="text-gray-600 text-lg md:text-xl font-medium max-w-xl mx-auto">
                Secure your seat today and join the league of industry professionals at BITI.
              </p>
              <button
                onClick={() => setOpenForm(true)}
                className="group relative bg-[#00b89c] text-white px-12 py-5 rounded-[2.5rem] font-black text-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-[#00b89c]/40 active:scale-95 flex items-center gap-3 mx-auto"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {texts.applyAdmission[lang]} 
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Shared Admission Modal ===== */}
      <AdmissionFormModal
        open={openForm}
        onClose={() => setOpenForm(false)}
      />
    </main>
  );
};

const StepCard = ({ icon, title, desc, onClick, number }) => (
  <motion.div
    whileHover={{ y: -10 }}
    onClick={onClick}
    className="group relative cursor-pointer bg-white border border-gray-100 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00b89c]/10"
  >
    <div className="absolute top-8 right-10 text-5xl font-black text-gray-50 group-hover:text-[#00b89c]/10 transition-colors">
      {number}
    </div>
    <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-[#f8fafc] text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-50">
      {icon}
    </div>
    <h3 className="font-black text-2xl mb-4 text-[#0f172a]">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

export default Admission;