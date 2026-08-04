import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Phone,
  CheckCircle2,
  X,
  ArrowRight,
  Briefcase,
  ShieldCheck,
  Award,
  Sparkles,
  Zap,
  UserCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";
import AdmissionFormModal from "/src/Modal/AdmissionFormModal";

const StartTraining = () => {
  const { lang } = useLanguage();
  const [activeModal, setActiveModal] = useState(null);
  const [openAdmission, setOpenAdmission] = useState(false);
  const navigate = useNavigate();

  const handleStepClick = (key) => {
    if (key === "form") {
      setOpenAdmission(true);
      return;
    }
    setActiveModal(key);
  };

  const closeModal = () => setActiveModal(null);

  return (
    <main className="min-h-screen pt-32 bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30 transition-colors">

      {/* ===== PREMIUM HERO SECTION ===== */}
      <section className="relative text-center max-w-5xl mx-auto px-6 mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00b89c]/10 rounded-full blur-[100px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <Zap size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Quick Start Guide</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            {texts.startTrainingTitle[lang]}<span className="text-[#00b89c]">.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            {texts.startTrainingSubtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* ===== STEPS GRID WITH NUMBERS ===== */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-32">
        {texts.startTrainingSteps[lang].map((step, i) => (
          <motion.div
            key={step.key}
            whileHover={{ y: -10 }}
            onClick={() => handleStepClick(step.key)}
            className="group relative cursor-pointer bg-white border border-gray-100 rounded-[3rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00b89c]/10 overflow-hidden"
          >
            {/* Numbering as Decoration */}
            <div className="absolute top-8 right-10 text-6xl font-black text-gray-50 group-hover:text-[#00b89c]/10 transition-colors">
              0{i + 1}
            </div>

            <div className="w-16 h-16 mb-8 flex items-center justify-center rounded-2xl bg-[#f8fafc] text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all duration-500 shadow-sm border border-gray-50">
              {step.key === "form" && <ClipboardList size={28} />}
              {step.key === "team" && <Phone size={28} />}
              {step.key === "start" && <CheckCircle2 size={28} />}
            </div>

            <h3 className="font-black text-2xl mb-4 text-[#0f172a]">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8">{step.desc}</p>
            
            <div className="inline-flex items-center gap-2 text-[#00b89c] font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
              Step Details <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </section>

      {/* ===== SUPPORT INFO SECTION (WITH INDUSTRY BG - NO BLACK) ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl flex items-center min-h-[500px]">
          <div className="absolute inset-0 z-0">
            {/* Industry Background Overlay - White/Teal Mix */}
            <img 
              src="https://i.ibb.co.com/kVjGXkQs/12.jpg" 
              alt="Industrial Future" 
              className="w-full h-full object-cover opacity-30" 
            />
            <div className="absolute inset-0 bg-white/85 backdrop-blur-[3px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
          </div>

          <div className="relative z-10 p-10 md:p-20 w-full flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-tight">
                Empowering the Next <br /> Generation of <span className="text-[#00b89c]">Experts.</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                IIT provides world-class industrial training following safety standards. Join us today to accelerate your professional growth.
              </p>
            </div>
            
            {/* Glass Box Call to Action */}
            <div className="bg-white/60 backdrop-blur-xl border border-white p-8 rounded-[3rem] shadow-xl max-w-md w-full">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#00b89c] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#00b89c]/20">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400">Join IIT</p>
                    <p className="font-black text-[#0f172a]">Industrial Training Experts</p>
                  </div>
               </div>
               <p className="text-gray-500 text-sm font-medium mb-8 italic">"Building skilled professionals for a better industrial future."</p>
               <button 
                  onClick={() => setOpenAdmission(true)}
                  className="w-full bg-[#0f172a] text-white py-4 rounded-2xl font-black hover:bg-[#00b89c] transition-all shadow-xl active:scale-95"
               >
                  Get Started Now
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INFO MODALS ===== */}
      <AnimatePresence>
        {activeModal && (
          <InfoModal 
            title={activeModal === "team" ? texts.consultationTitle[lang] : texts.startBenefitsTitle[lang]} 
            onClose={closeModal}
          >
            {activeModal === "team" ? (
              <div className="space-y-4 relative z-10">
                <InfoRow icon={<Briefcase size={20} />} text={texts.consultationRole[lang]} />
                <InfoRow icon={<Phone size={20} />} text="+880 1XXX-XXXXXX" />
                <InfoRow icon={<ShieldCheck size={20} />} text={texts.consultationGuide[lang]} />
              </div>
            ) : (
              <div className="space-y-4 relative z-10">
                <InfoRow icon={<ShieldCheck size={20} />} text={texts.startBenefit1[lang]} />
                <InfoRow icon={<Award size={20} />} text={texts.startBenefit2[lang]} />
                <InfoRow icon={<CheckCircle2 size={20} />} text={texts.startBenefit3[lang]} />
                <button
                  onClick={() => { closeModal(); navigate("/training"); }}
                  className="mt-6 w-full bg-[#00b89c] text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#0f172a] transition-all shadow-xl shadow-[#00b89c]/30"
                >
                  {texts.viewTraining[lang]} <ArrowRight size={18} />
                </button>
              </div>
            )}
          </InfoModal>
        )}
      </AnimatePresence>

      {/* ===== SHARED ADMISSION MODAL ===== */}
      <AdmissionFormModal
        open={openAdmission}
        onClose={() => setOpenAdmission(false)}
      />
    </main>
  );
};

/* ===== REUSABLE INFO MODAL COMPONENT (THEME READY) ===== */

const InfoModal = ({ title, children, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[1000] bg-[#0f172a]/70 backdrop-blur-md flex items-center justify-center px-4"
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="relative bg-white rounded-[3.5rem] p-10 md:p-14 max-w-lg w-full shadow-2xl overflow-hidden"
    >
      {/* Decorative Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b89c]/5 rounded-bl-full" />
      
      <button
        onClick={onClose}
        className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all z-20"
      >
        <X size={20} />
      </button>
      
      <h3 className="text-3xl font-black mb-10 text-[#0f172a] leading-tight pr-6 relative z-10">{title}</h3>
      <div className="space-y-4">{children}</div>
    </motion.div>
  </motion.div>
);

const InfoRow = ({ icon, text }) => (
  <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 group hover:bg-white hover:shadow-lg transition-all duration-300">
    <div className="text-[#00b89c] group-hover:scale-110 transition-transform">{icon}</div>
    <span className="font-bold text-[#0f172a] text-sm leading-tight">{text}</span>
  </div>
);

export default StartTraining;