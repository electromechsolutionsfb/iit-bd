import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  X,
  User,
  Phone,
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { useLanguage } from "../Context/LanguageContext";
import { texts } from "/src/utils/text";

/* ===== Job Data ===== */
const jobData = [
  {
    id: 1,
    title: { en: "Boiler Operator", bn: "বয়লার অপারেটর" },
    location: { en: "Dhaka / Gazipur", bn: "ঢাকা / গাজীপুর" },
    type: { en: "Full Time", bn: "ফুল টাইম" },
    requirements: {
      en: ["Knowledge of high-pressure boiler operations", "Industrial experience preferred", "Strong understanding of safety SOP compliance"],
      bn: ["হাই-প্রেশার বয়লার অপারেশনের জ্ঞান", "ইন্ডাস্ট্রিয়াল অভিজ্ঞতা অগ্রাধিকারযোগ্য", "সেফটি SOP সম্পর্কে ভালো ধারণা"]
    },
  },
  {
    id: 2,
    title: { en: "Boiler Maintenance Technician", bn: "বয়লার মেইনটেন্যান্স টেকনিশিয়ান" },
    location: { en: "Narayanganj", bn: "নারায়ণগঞ্জ" },
    type: { en: "Full Time", bn: "ফুল টাইম" },
    requirements: {
      en: ["Maintenance and troubleshooting expertise", "Understanding of valves, pumps, and pipelines", "Willingness to work in field environments"],
      bn: ["মেইনটেন্যান্স ও ট্রাবলশুটিং দক্ষতা", "ভাল্ভ, পাম্প ও পাইপলাইনের জ্ঞান", "ফিল্ডে কাজ করার মানসিকতা"]
    },
  },
  {
    id: 3,
    title: { en: "Industrial Safety Officer", bn: "ইন্ডাস্ট্রিয়াল সেফটি অফিসার" },
    location: { en: "Chattogram", bn: "চট্টগ্রাম" },
    type: { en: "Full Time", bn: "ফুল টাইম" },
    requirements: {
      en: ["Knowledge of industrial safety laws and compliance", "Experience conducting PPE and safety drills", "Strong reporting and documentation skills"],
      bn: ["ইন্ডাস্ট্রিয়াল সেফটি আইন সম্পর্কে জ্ঞান", "PPE ও সেফটি ড্রিল পরিচালনার অভিজ্ঞতা", "রিপোর্টিং ও ডকুমেন্টেশন দক্ষতা"]
    },
  },
];

const Job = () => {
  const { lang } = useLanguage();
  const [activeJob, setActiveJob] = useState(null);

  return (
    <main className="min-h-screen pt-32 bg-[#f8fafc] text-[#0f172a] selection:bg-[#00e1bf]/30 transition-colors">

      {/* ===== HERO SECTION ===== */}
      <section className="relative max-w-7xl mx-auto px-6 text-center mb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#00b89c]/10 rounded-full blur-[120px] -z-10" />
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full shadow-sm">
            <Sparkles size={14} className="text-[#00b89c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Careers at BITI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            {texts.jobTitle[lang]}<span className="text-[#00b89c]">.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            {texts.jobSubtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* ===== JOB LIST ===== */}
      <section className="max-w-6xl mx-auto px-6 mb-32 space-y-6">
        {jobData.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:shadow-2xl hover:shadow-[#00b89c]/10 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#00b89c] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-black mb-4 flex items-center gap-3 text-[#0f172a]">
                <div className="w-12 h-12 rounded-2xl bg-[#f8fafc] text-[#00b89c] flex items-center justify-center shadow-sm">
                   <Briefcase size={24} />
                </div>
                {job.title[lang]}
              </h3>
              <div className="flex flex-wrap gap-6 text-gray-400 font-bold text-xs uppercase tracking-widest">
                <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                  <MapPin size={14} className="text-[#00b89c]" /> {job.location[lang]}
                </span>
                <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                  <Clock size={14} className="text-[#00b89c]" /> {job.type[lang]}
                </span>
              </div>
            </div>

            <button
              onClick={() => setActiveJob(job)}
              className="bg-[#0f172a] text-white font-black px-10 py-5 rounded-2xl inline-flex items-center justify-center gap-3 hover:bg-[#00b89c] transition-all shadow-xl shadow-gray-200 hover:shadow-[#00b89c]/30 active:scale-95 group/btn"
            >
              {texts.applyNow[lang]} <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </section>

      {/* ===== WHY BITI (INDUSTRY IMAGE THEME) ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="relative rounded-[4rem] overflow-hidden shadow-2xl min-h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img src="https://i.ibb.co.com/kVjGXkQs/12.jpg" alt="BITI Career" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-white/90 backdrop-blur-[3px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          </div>

          <div className="relative z-10 p-10 md:p-20 w-full">
            <h2 className="text-4xl md:text-6xl font-black mb-14 text-[#0f172a] leading-tight">
              {texts.whyCareerBITI[lang]}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {texts.jobBenefits[lang].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-white p-6 rounded-[2rem] shadow-sm group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00b89c]/10 flex items-center justify-center text-[#00b89c] group-hover:bg-[#00b89c] group-hover:text-white transition-all">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-[#0f172a]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== APPLY MODAL ===== */}
      <AnimatePresence>
        {activeJob && (
          <Modal
            title={`${texts.applyFor[lang]} ${activeJob.title[lang]}`}
            onClose={() => setActiveJob(null)}
          >
            <div className="space-y-4 mb-10">
              <h4 className="font-black text-sm uppercase tracking-widest text-[#00b89c]">
                {texts.jobRequirements[lang]}
              </h4>
              <div className="space-y-3">
                {activeJob.requirements[lang].map((req, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                    <CheckCircle2 size={18} className="text-[#00b89c] mt-0.5 shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Input icon={<User size={18} />} placeholder={texts.fullName[lang]} />
              <Input icon={<Phone size={18} />} placeholder={texts.contactNumber[lang]} />
              <Input icon={<FileText size={18} />} placeholder={texts.experience[lang]} />

              <button
                type="submit"
                className="w-full bg-[#00b89c] text-white font-black py-5 rounded-2xl hover:bg-[#0f172a] transition-all shadow-xl shadow-[#00b89c]/20 active:scale-95 flex items-center justify-center gap-3"
              >
                {texts.submitApplication[lang]} <ArrowRight size={18} />
              </button>
            </form>
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
      <h3 className="text-3xl font-black mb-10 text-[#0f172a] leading-tight pr-8">{title}</h3>
      {children}
    </motion.div>
  </motion.div>
);

const Input = ({ icon, placeholder }) => (
  <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus-within:border-[#00b89c] focus-within:bg-white transition-all group">
    <span className="text-[#00b89c] group-focus-within:scale-110 transition-transform">{icon}</span>
    <input
      type="text"
      required
      placeholder={placeholder}
      className="bg-transparent w-full outline-none text-[#0f172a] font-bold placeholder:text-gray-400"
    />
  </div>
);

export default Job;